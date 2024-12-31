import { nanoid } from "nanoid";
import Transaction from "../models/transaction.js";
import TransactionDetail from "../models/transaction_details.js";
import Account from "../models/account.js";

export const ShowTransaction = async (req, res) => {
  try {
    const response = await Transaction.findAll();
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
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const AddTransaction = async (req, res) => {
  const { grossAmount, item, accountId, orderId } = req.body;

  try {
    const isCustomer = await Account.findOne({
      where: { account_id: accountId },
    }).then((element) => element.type == "customer");

    if (isCustomer) {
      await Transaction.create({
        order_id: orderId,
        gross_amount: grossAmount,
        account_id: accountId,
      }).then(async (response) =>
        item.forEach(async (element) => {
          await TransactionDetail.create({
            transaction_id: response.transaction_id,
            quantity: element["quantity"],
            product_id: element["productId"],
          });
        })
      );
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

// export const UpdateTransaction = async (req, res) => {
//   const { id } = req.params;
//   const { product_id, quantity } = req.body;
//   try {
//     const request = {
//       product_id: product_id,
//       quantity: quantity,
//     };
//     const isExist = await Transaction.findOne({
//       where: { transaction_id: id },
//     });
//     if (isExist) {
//       await Transaction.update(request, {
//         where: { transaction_id: id },
//       });
//       res.status(200).json({ msg: "Data berhasil diupdate" });
//     } else {
//       res.json({ msg: "data tidak tersedia" });
//     }
//   } catch (error) {
//     res.json({ msg: Error });
//   }
// };

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
      res.status(200).json({ msg: "Data berhasil dihapus" });
    } else {
      res.json({ msg: "Data tidak tersedia" });
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};
