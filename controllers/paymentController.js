import dotenv from "dotenv";
import Midtrans from "midtrans-client";
import Product from "../models/product.js";
import { nanoid } from "nanoid";

dotenv.config();

const snap = new Midtrans.Snap();
snap.apiConfig.set({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

export const payment = async (req, res) => {
  const { item } = req.body;
  const orderId = `TKR-${nanoid(4)}-${nanoid(8)}`;
  let grossAmount = 0;

  let requestData = [];

  for (let i = 0; i < item.length; i++) {
    const response = await Product.findOne({
      where: { product_id: item[i]["productId"] },
      attributes: ["product_name", "product_price"],
    });
    grossAmount += parseInt(response["product_price"]) * item[i]["quantity"];
    requestData.push({
      name: response["product_name"],
      price: response["product_price"],
      quantity: item[i]["quantity"],
      id: item[i]["productId"],
    });
  }

  let parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: grossAmount,
    },
    item_details: requestData,
    callbacks: {
      finish: `${process.env.FRONT_END_FINISH_URL}/${orderId}`,
      error: process.env.FRONT_END_ERROR_URL,
      pending: process.env.FRONT_END_PENDING_URL,
    },
  };

  snap
    .createTransaction(parameter)
    .then((transaction) => {
      let transactionToken = transaction.token;
      let transactionRedirectUrl = transaction.redirect_url;
      res.json({
        transactionToken: transactionToken,
        transactionRedirectUrl: transactionRedirectUrl,
      });
    })
    .catch((e) => console.log("error", e.message));
};

export const getStatusPayment = async (trxnotif) => {
  const { orderId } = req.params;

  const notificationJson = await snap.transaction.status(orderId);
  snap.transaction.notification(notificationJson).then((statusResponse) => {
    let orderId = statusResponse.order_id;
    let transactionStatus = statusResponse.transaction_status;
    let fraudStatus = statusResponse.fraud_status;
    res.json({
      orderId: orderId,
      transactionStatus: transactionStatus,
      fraudStatus: fraudStatus,
    });
  });
};
