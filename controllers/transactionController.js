import Transaction from "../models/transaction";

export const ShowTransaction = async (req, res) => {
  try {
    const response = await Transaction.findAll();
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const ShowTransactionById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Transaction.findOne({
      where: { transaction_id: id },
    });
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const AddTransaction = async (req, res) => {
  const { product_id, quantity, account_id } = req.body;
  try {
    const isCustomer = await Account.findOne({
      where: { account_id: account_id },
    }).then((element) => element.type == "customer");

    if (isCustomer) {
      const request = {
        product_id: product_id,
        quantity: quantity,
        account_id: account_id,
      };
      await Transaction.create(request);
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

export const UpdateTransaction = async (req, res) => {
  const { id } = req.params;
  const { product_id, quantity } = req.body;
  try {
    const request = {
      product_id: product_id,
      quantity: quantity,
    };
    const isExist = await Transaction.findOne({
      where: { transaction_id: id },
    });
    if (isExist) {
      await Transaction.update(request, {
        where: { transaction_id: id },
      });
      res.status(200).json({ msg: "Data berhasil diupdate" });
    } else {
      res.json({ msg: "data tidak tersedia" });
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const DeleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const isExist = await Transaction.findOne({
      where: { transaction_id: id },
    });
    if (isExist) {
      await Transaction.destroy({
        where: { transaction_id: id },
      });
      res.status(200).json({ msg: "Data berhasil dikirim" });
    } else {
      res.json({ msg: "Data tidak tersedia" });
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};
