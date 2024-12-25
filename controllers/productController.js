import Account from "../models/account.js";
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
    productName,
    ProductDescription,
    ProductPrice,
    ProductStock,
    ProductPicture,
    ProductVarian,
    categoryId,
    AccountId,
  } = req.body;
  try {
    const isCustomer = await Account.findOne({
      where: { account_id: account_id },
    }).then((element) => element.type == "saler");

    if (isCustomer) {
      const request = {
        product_name: productName,
        product_description: ProductDescription,
        product_price: ProductPrice,
        product_stock: ProductStock,
        product_picture: ProductPicture,
        product_varian: ProductVarian,
        category_id: categoryId,
        account_id: AccountId,
      };
      await Product.create(request);
      res.status(200).json({ msg: "Data berhasil dikirim" });
    } else {
      res.json({
        msg: "Hanya akun saler yang diperbolehkan melakukan action ini",
      });
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const UpdateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    productName,
    ProductDescription,
    ProductPrice,
    ProductStock,
    ProductPicture,
    ProductVarian,
    categoryId,
  } = req.body;
  try {
    const request = {
      product_name: productName,
      product_description: ProductDescription,
      product_price: ProductPrice,
      product_stock: ProductStock,
      product_picture: ProductPicture,
      product_varian: ProductVarian,
      category_id: categoryId,
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
