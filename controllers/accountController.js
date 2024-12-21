import Account from "../models/account.js";
import bcrypt from "bcrypt";

const hashPassword = (password) => {
  const saltRound = 5;
  return bcrypt.hashSync(password, saltRound);
};

export const ShowAccount = async (req, res) => {
  try {
    const response = await Account.findAll();
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const ShowAccountById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Account.findOne({ where: { account_id: id } });
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const AddAccount = async (req, res) => {
  const { username, email, password, type } = req.body;
  try {
    const request = {
      username: username,
      email: email,
      password: hashPassword(password),
      type: type,
    };
    await Account.create(request);
    res.status(200).json({ msg: "Data berhasil dikirim" });
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const UpdateAccount = async (req, res) => {
  const { id } = req.params;
  const { username, email, password, type } = req.body;
  try {
    const request = {
      username: username,
      email: email,
      password: hashPassword(password),
      type: type,
    };
    const isExist = await Account.findOne({ where: { account_id: id } });
    if (isExist) {
      await Account.update(request, {
        where: { account_id: id },
      });
      res.status(200).json({ msg: "Data berhasil diupdate" });
    } else {
      res.json({ msg: "data tidak tersedia" });
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const DeleteAccount = async (req, res) => {
  const { id } = req.params;
  try {
    const isExist = await Account.findOne({ where: { account_id: id } });
    if (isExist) {
      await Account.destroy({
        where: { account_id: id },
      });
      res.status(200).json({ msg: "Data berhasil dikirim" });
    } else {
      res.json({ msg: "data tidak tersedia" });
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};
