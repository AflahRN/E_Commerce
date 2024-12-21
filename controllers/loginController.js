import Account from "../models/account.js";
import bcrpyt from "bcrypt";

export const login = async (req, res) => {
  const { usernameEmail, password } = req.body;
  try {
    let isExist = await Account.findOne({
      where: { username: usernameEmail },
    });
    if (!isExist) {
      isExist = await Account.findOne({
        where: { email: usernameEmail },
      });
    }

    if (isExist) {
      let userData = isExist;
      const validation = await bcrpyt.compare(password, userData.password);
      if (!validation) {
        res.json({ msg: "Wrong Password" });
      } else {
        res.json(userData);
      }
    } else {
      res.send("Email atau username salah");
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};
