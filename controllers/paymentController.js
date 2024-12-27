import crypto from "crypto";
import axios from "axios";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
import Product from "../models/product.js";
import Category from "../models/category.js";

dotenv.config();

const requestTarget = "/checkout/v1/payment";
const requestId = `EC-${nanoid(4)}-${nanoid(8)}`;
const requestTimestamp = new Date().toISOString().slice(0, 19) + "Z";
export const payment = async (req, res) => {
  const { item } = req.body;

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

export const checkPayment = async (req, res) => {
  const invoice_number = "EC-at2a-XfGezBV5"; // change with your invoice number
  const url = "/orders/v1/status/" + invoice_number;

  const digest = "";
  function generateSignature() {
    // Prepare Signature Component
    const componentSignature = `Client-Id:${process.env.DOKU_CLIENT_ID}\nRequest-Id:${invoice_number}\nRequest-Timestamp:${requestTimestamp}\nRequest-Target:/orders/v1/status/${invoice_number}`;

    // Calculate HMAC-SHA256 base64 from all the components above
    let hmac256Value = crypto
      .createHmac("sha256", process.env.DOKU_SECRET_KEY)
      .update(componentSignature.toString())
      .digest();

    let bufferFromHmac256Value = Buffer.from(hmac256Value);
    let signature = bufferFromHmac256Value.toString("base64");
    return "HMACSHA256=" + signature;
  }

  // Generate Header Signature
  let headerSignature = generateSignature();

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: process.env.DOKU_APP_URL + url,
    headers: {
      "Client-Id": process.env.DOKU_CLIENT_ID,
      "Request-Id": invoice_number,
      "Request-Timestamp": requestTimestamp,
      Signature: headerSignature,
    },
  };

  axios
    .request(config)
    .then((response) => {
      return res.json(response.data);
    })
    .catch((error) => {
      res.json(error);
    });
};
