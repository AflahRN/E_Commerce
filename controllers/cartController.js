import Account from "../models/account.js";
import Cart from "../models/cart.js";
import Product from "../models/product.js";

export const ShowCart = async (req, res) => {
  try {
    const response = await Cart.findAll({
      include: [
        { model: Product, attributes: ["product_name", "product_price"] },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const ShowCartById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Cart.findOne({ where: { cart_id: id } });
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const AddCart = async (req, res) => {
  const { productId, quantity, accountId } = req.body;
  try {
    const isCustomer = await Account.findOne({
      where: { account_id: accountId },
    }).then((element) => element.type == "customer");

    if (isCustomer) {
      const request = {
        product_id: productId,
        quantity: quantity,
        account_id: accountId,
      };
      await Cart.create(request);
      res.status(200).json({ msg: "Data berhasil dikirim" });
    } else {
      res.json({
        msg: "Hanya akun customer yang diperbolehkan melakukan action ini",
      });
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const UpdateCart = async (req, res) => {
  const { id } = req.params;
  const { productId, quantity } = req.body;
  try {
    const request = {
      product_id: productId,
      quantity: quantity,
    };
    const isExist = await Cart.findOne({ where: { cart_id: id } });

    if (isExist) {
      await Cart.update(request, {
        where: { cart_id: id },
      });
      res.status(200).json({ msg: "Data berhasil diupdate" });
    } else {
      res.json({ msg: "data tidak tersedia" });
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const DeleteCart = async (req, res) => {
  const { id } = req.params;
  try {
    const isExist = await Cart.findOne({ where: { cart_id: id } });
    if (isExist) {
      await Cart.destroy({
        where: { cart_id: id },
      });
      res.status(200).json({ msg: "Data berhasil dikirim" });
    } else {
      res.json({ msg: "data tidak tersedia" });
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};
