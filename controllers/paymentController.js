import dotenv from "dotenv";
import Midtrans from "midtrans-client";
import Product from "../models/product.js";

dotenv.config();

const snap = new Midtrans.Snap();
snap.apiConfig.set({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

export const payment = async (req, res) => {
  const { orderId, grossAmount, item } = req.body;

  let requestData = [];
  for (let i = 0; i < item.length; i++) {
    const response = await Product.findOne({
      where: { product_id: item[i]["productId"] },
      attributes: ["product_name", "product_price"],
    });
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
