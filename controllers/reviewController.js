import Account from "../models/account.js";
import Review from "../models/review.js";

export const ShowReview = async (req, res) => {
  try {
    const response = await Review.findAll();
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const ShowReviewById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Review.findOne({ where: { review_id: id } });
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const AddReview = async (req, res) => {
  const { review_text, review_skor, product_id, account_id } = req.body;
  try {
    const isCustomer = await Account.findOne({
      where: { account_id: account_id },
    }).then((element) => element.type == "customer");

    if (isCustomer) {
      const request = {
        review_text: review_text,
        review_skor: review_skor,
        product_id: product_id,
        account_id: account_id,
      };
      await Review.create(request);
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

export const UpdateReview = async (req, res) => {
  const { id } = req.params;
  const { review_text, review_skor, product_id } = req.body;
  try {
    const request = {
      review_text: review_text,
      review_skor: review_skor,
      product_id: product_id,
    };
    const isExist = await Review.findOne({ where: { review_id: id } });
    if (isExist) {
      await Review.update(request, {
        where: { review_id: id },
      });
      res.status(200).json({ msg: "Data berhasil diupdate" });
    } else {
      res.json({ msg: "data tidak tersedia" });
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const DeleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    const isExist = await Review.findOne({ where: { review_id: id } });
    if (isExist) {
      await Review.destroy({
        where: { review_id: id },
      });
      res.status(200).json({ msg: "Data berhasil dikirim" });
    } else {
      res.json({ msg: "data tidak tersedia" });
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};
