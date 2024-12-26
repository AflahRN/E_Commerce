import express, { urlencoded } from "express";
import cors from "cors";
import router from "./router/router.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
