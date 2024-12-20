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
  const { product_id, quantity } = req.body;
  try {
    const request = {
      product_id: product_id,
      quantity: quantity,
    };
    await Wishlist.create(request);
    res.status(200).json({ msg: "Data berhasil dikirim" });
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const UpdateWishlist = async (req, res) => {
  const { id } = req.params;
  const { product_id, quantity } = req.body;
  try {
    const request = {
      product_id: product_id,
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
