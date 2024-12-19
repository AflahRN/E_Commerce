import Product from "../models/product.js";

export const ShowProduct = async (req, res) => {
  try {
    const response = await Product.findAll();
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const ShowProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Product.findOne({ where: { product_id: id } });
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const AddProduct = async (req, res) => {
  const {
    product_name,
    product_description,
    product_price,
    product_stock,
    product_picture,
    product_varian,
    category_id,
  } = req.body;
  try {
    const request = {
      product_name: product_name,
      product_description: product_description,
      product_price: product_price,
      product_stock: product_stock,
      product_picture: product_picture,
      product_varian: product_varian,
      category_id: category_id,
    };
    await Product.create(request);
    res.status(200).json({ msg: "Data berhasil dikirim" });
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const UpdateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    product_name,
    product_description,
    product_price,
    product_stock,
    product_picture,
    product_varian,
    category_id,
  } = req.body;
  try {
    const request = {
      product_name: product_name,
      product_description: product_description,
      product_price: product_price,
      product_stock: product_stock,
      product_picture: product_picture,
      product_varian: product_varian,
      category_id: category_id,
    };
    const isExist = await Product.findOne({ where: { product_id: id } });
    if (isExist) {
      await Product.update(request, {
        where: { product_id: id },
      });
      res.status(200).json({ msg: "Data berhasil diupdate" });
    } else {
      res.json({ msg: "data tidak tersedia" });
    }
  } catch (error) {
    res.json({ msg: Error });
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
