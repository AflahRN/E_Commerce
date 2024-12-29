import Account from "../models/account.js";
import Category from "../models/category.js";
import Product from "../models/product.js";
import fs from "fs";

export const ShowProduct = async (req, res) => {
  try {
    const response = await Product.findAll({
      include: [{ model: Category, attributes: ["category_name"] }],
    });
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const ShowProductImage = async (req, res) => {
  const { id } = req.body;
  try {
    const response = await Product.findOne({
      where: { product_id: id },
      attributes: ["product_image"],
    });
    res.status(200).json({ buffer: response["product_image"] });
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const ShowProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Product.findOne({
      where: { product_id: id },
      include: [{ model: Category, attributes: ["category_name"] }],
    });
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const AddProduct = async (req, res) => {
  const {
    productName,
    productDescription,
    productPrice,
    productStock,
    categoryId,
    accountId,
  } = req.body;
  const file = req.file;
  if (file["size"] >= 100000) {
    res.json({
      status: "Error",
      message: "Maximal image size 100kb",
    });
  } else {
    const imageData = fs.readFileSync(file.path);
    try {
      const isCustomer = await Account.findOne({
        where: { account_id: accountId },
      }).then((element) => element.type == "saler");

      if (isCustomer) {
        await Product.create({
          product_name: productName,
          product_description: productDescription,
          product_price: productPrice,
          product_stock: productStock,
          product_image: imageData,
          category_id: categoryId,
          account_id: accountId,
        });
        res.status(200).json({ msg: "Data berhasil dikirim" });
      } else {
        res.json({
          msg: "Hanya akun saler yang diperbolehkan melakukan action ini",
        });
      }
    } catch (error) {
      res.json({ msg: Error });
    }
  }
};

export const UpdateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    productName,
    productDescription,
    productPrice,
    productStock,
    categoryId,
  } = req.body;
  const file = req.file;
  if (file["size"] >= 100000) {
    res.json({
      status: "Error",
      message: "Maximal image size 100kb",
    });
  } else {
    try {
      const productImage = fs.readFileSync(file.path);
      const isExist = await Product.findOne({ where: { product_id: id } });
      if (isExist) {
        await Product.update(
          {
            product_name: productName,
            product_description: productDescription,
            product_price: productPrice,
            product_stock: productStock,
            product_image: productImage,
            category_id: categoryId,
          },
          {
            where: { product_id: id },
          }
        );
        res.status(200).json({ msg: "Data berhasil diupdate" });
      } else {
        res.json({ msg: "data tidak tersedia" });
      }
    } catch (error) {
      res.json({ msg: Error });
    }
  }
};

export const DeleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const isExist = await Product.findOne({ where: { product_id: id } });
    if (isExist) {
      await Product.destroy({
        where: { product_id: id },
      });
      res.status(200).json({ msg: "Data berhasil dikirim" });
    } else {
      res.json({ msg: "data tidak tersedia" });
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};
