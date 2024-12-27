import Account from "../models/account.js";
import bcrpyt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

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
      const validation = bcrpyt.compareSync(password, userData.password);
      if (!validation) {
        res.json({ msg: "Wrong Password" });
      } else {
        const accessToken = jwt.sign(
          {
            userId: userData.account_id,
            username: userData.username,
            email: userData.email,
          },
          process.env.SECRET_KEY,
          { expiresIn: "60h" }
        );
        const refreshToken = jwt.sign(
          {
            userId: userData.account_id,
            username: userData.username,
            email: userData.email,
          },
          process.env.SECRET_KEY,
          { expiresIn: "1h" }
        );

        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          sameSite: "None",
          secure: true,
          maxAge: 10 * 60 * 1000,
        });
        res.json({ token: accessToken });
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

    jwt.verify(refreshToken, process.env.SECRET_KEY, (err, decoded) => {
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
          { expiresIn: "60s" }
        );
        return res.json({ token: accessToken });
      }
    });
  }
};

export const Logout = async (req, res) => {
  try {
    res.clearCookie("refreshToken");
    res.json({ message: "Berhasil Logout" });
  } catch (error) {
    console.log(error);
  }
};
