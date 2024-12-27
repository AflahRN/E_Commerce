import crypto from "crypto";
import axios from "axios";
import Account from "../models/account.js";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
import Product from "../models/product.js";
import Category from "../models/category.js";
import { error } from "console";

dotenv.config();

export const payment = async (req, res) => {
  const { item } = req.body;
  const requestTarget = "/checkout/v1/payment";
  const requestTimestamp = new Date().toISOString().slice(0, 19) + "Z";
  const requestId = `EC-${nanoid(4)}-${nanoid(8)}`;

  const id = req.body.id; //Id nanti ganti dari cookies
  const userCredential = await Account.findOne({
    where: { account_id: id },
  });

  let requestItem = {
    order: {
      amount: 0,
      invoice_number: requestId,
      line_item: [],
    },
    payment: {
      payment_due_date: 60,
    },
  };
  for (let i = 0; i < item.length; i++) {
    const response = await Product.findOne({
      where: { product_id: item[i].product_id },
      include: [{ model: Category, attributes: ["category_name"] }],
    });
    requestItem.order.line_item.push({
      id: item[i].product_id,
      name: response.dataValues.product_name,
      quantity: item[i].quantity,
      price: response.dataValues.product_price,
      category: response.dataValues.category.category_name,
    });
    requestItem.order.amount +=
      response.dataValues.product_price * item[i].quantity;
  }

  const generateDigest = (item) => {
    const data = JSON.stringify(item);
    const itemHash = crypto.createHash("sha256").update(data, "utf-8").digest();
    const buffer = Buffer.from(itemHash);
    return buffer.toString("base64");
  };

  const digest = generateDigest(requestItem);
  const generateSignature = () => {
    const componentSignature = `Client-Id:${process.env.DOKU_CLIENT_ID}\nRequest-Id:${requestId}\nRequest-Timestamp:${requestTimestamp}\nRequest-Target:${requestTarget}\nDigest:${digest}`;
    const hmac = crypto
      .createHmac("sha256", process.env.DOKU_SECRET_KEY)
      .update(componentSignature.toString())
      .digest();
    const signature = Buffer.from(hmac).toString("base64");
    return `HMACSHA256=${signature}`;
  };

  const signature = generateSignature();
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: process.env.DOKU_APP_URL + requestTarget,
    headers: {
      "Client-Id": process.env.DOKU_CLIENT_ID,
      "Request-Id": requestId,
      "Request-Timestamp": requestTimestamp,
      Signature: signature,
      "Content-Type": "application/json",
    },
    data: requestItem,
  };

  axios
    .request(config)
    .then((response) => {
      //   return res.json(response.data);
      return res.json({
        message: response.data.message[0],
        token: response.data.response.payment.token_id,
        redirect_url: response.data.response.payment.url,
      });
    })
    .catch((error) => {
      res.json(error);
    });
};
