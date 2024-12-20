import Cart from "../models/cart.js";

export const ShowCart = async (req, res) => {
  try {
    const response = await Cart.findAll();
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const ShowCartById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Cart.findOne({ where: { cart_id: id } });
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const AddCart = async (req, res) => {
  const { product_id, quantity } = req.body;
  try {
    const request = {
      product_id: product_id,
      quantity: quantity,
    };
    await Cart.create(request);
    res.status(200).json({ msg: "Data berhasil dikirim" });
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const UpdateCart = async (req, res) => {
  const { id } = req.params;
  const { product_id, quantity } = req.body;
  try {
    const request = {
      product_id: product_id,
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
