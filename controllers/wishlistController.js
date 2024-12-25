import Account from "../models/account.js";
import Wishlist from "../models/wishlist.js";

export const ShowWishlist = async (req, res) => {
  try {
    const response = await Wishlist.findAll();
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const ShowWishlistById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Wishlist.findOne({ where: { wishlist_id: id } });
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const AddWishlist = async (req, res) => {
  const { productId, quantity, accountId } = req.body;
  try {
    const isCustomer = await Account.findOne({
      where: { account_id: account_id },
    }).then((element) => element.type == "customer");

    if (isCustomer) {
      const request = {
        product_id: productId,
        quantity: quantity,
        account_id: accountId,
      };
      await Wishlist.create(request);
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

export const UpdateWishlist = async (req, res) => {
  const { id } = req.params;
  const { productId, quantity } = req.body;
  try {
    const request = {
      product_id: productId,
      quantity: quantity,
    };
    const isExist = await Wishlist.findOne({ where: { wishlist_id: id } });
    if (isExist) {
      await Wishlist.update(request, {
        where: { wishlist_id: id },
      });
      res.status(200).json({ msg: "Data berhasil diupdate" });
    } else {
      res.json({ msg: "data tidak tersedia" });
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const DeleteWishlist = async (req, res) => {
  const { id } = req.params;
  try {
    const isExist = await Wishlist.findOne({ where: { wishlist_id: id } });
    if (isExist) {
      await Wishlist.destroy({
        where: { wishlist_id: id },
      });
      res.status(200).json({ msg: "Data berhasil dikirim" });
    } else {
      res.json({ msg: "data tidak tersedia" });
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};
