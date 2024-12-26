import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const tokenAuth = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];

  if (!token) {
    res.status(200).json({
      status: "Error",
      message: "Error!Token was not provided.",
    });
  } else {
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.json({ message: "Token is invalid" });
      }
      req.user = user;
      next();
    });
  }
};
