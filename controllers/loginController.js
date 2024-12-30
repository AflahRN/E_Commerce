import Account from "../models/account.js";
import bcrpyt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { json, Sequelize } from "sequelize";

dotenv.config();

export const Login = async (req, res) => {
  const { loginData, password } = req.body;
  try {
    let isExist = await Account.findOne({
      where: { username: loginData },
    });
    if (!isExist) {
      isExist = await Account.findOne({
        where: { email: loginData },
      });
    }

    if (isExist) {
      let userData = isExist;
      const validation = bcrpyt.compare(password, userData.password);
      if (!validation) {
        res.json({ msg: "Wrong Password" });
      } else {
        const accessToken = jwt.sign(
          {
            accountId: userData.account_id,
            username: userData.username,
            email: userData.email,
          },
          process.env.SECRET_KEY,
          { expiresIn: "60h" }
        );

        await Account.update(
          {
            token: accessToken,
          },
          {
            where: {
              [Sequelize.Op.or]: [
                { username: loginData },
                { email: loginData },
              ],
            },
          }
        );
        res.json({
          token: accessToken,
          accountId: userData.account_id,
          type: userData.type,
        });
      }
    } else {
      res.send("Email atau username salah");
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};

// Refresh access token
export const Refresh = async (req, res) => {
  if (req.cookies?.refreshToken) {
    const refreshToken = req.cookies.refreshToken;

    jwt.verify(refreshToken, process.env.SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res.status(406).json({ message: "Unauthorized" });
      } else {
        const accessToken = jwt.sign(
          {
            userId: decoded.id,
            username: decoded.username,
            email: decoded.email,
          },
          process.env.SECRET_KEY,
          { expiresIn: "60s" },
          await Account.update(
            { access_token: accessToken },
            { where: { account_id: id } }
          )
        );
        return res.json({ token: accessToken });
      }
    });
  }
};

export const Logout = async (req, res) => {
  const { id } = req.body;
  try {
    res.clearCookie("refreshToken");
    await Account.update(
      {
        refresh_token: null,
        access_token: null,
      },
      {
        where: {
          account_id: id,
        },
      }
    );
    res.json({ message: "Berhasil Logout" });
  } catch (error) {
    console.log(error);
  }
};
