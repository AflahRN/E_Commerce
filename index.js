import express, { urlencoded } from "express";
import cors from "cors";
import router from "./router/router.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
