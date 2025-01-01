import express from "express";
import {
  AddCategory,
  DeleteCategory,
  ShowCategory,
  ShowCategoryById,
  UpdateCategory,
} from "../controllers/categoryController.js";
import {
  AddProduct,
  DeleteProduct,
  multerConfig,
  ShowProduct,
  ShowProductById,
  UpdateProduct,
} from "../controllers/productController.js";
import {
  AddCart,
  cleanCart,
  DeleteCart,
  ShowCart,
  ShowCartById,
  UpdateCart,
} from "../controllers/cartController.js";
import {
  AddReview,
  DeleteReview,
  ResponseReview,
  ShowReview,
  ShowReviewById,
  UpdateReview,
} from "../controllers/reviewController.js";
import {
  AddAccount,
  DeleteAccount,
  ShowAccount,
  ShowAccountById,
  UpdateAccount,
} from "../controllers/accountController.js";
import { Login, Logout } from "../controllers/loginController.js";
import {
  AddTransaction,
  DeleteTransaction,
  ShowTransaction,
  ShowTransactionById,
  UpdateStatusTransaction,
} from "../controllers/transactionController.js";
import { checkPayment, payment } from "../controllers/paymentController.js";
import { tokenAuth } from "../middleware/tokenAuth.js";

const router = express.Router();

//category
router.get("/category", tokenAuth, ShowCategory);
router.get("/category/:id", tokenAuth, ShowCategoryById);
router.post("/category", tokenAuth, AddCategory);
router.patch("/category/:id", tokenAuth, UpdateCategory);
router.delete("/category/:id", tokenAuth, DeleteCategory);

//Product
router.get("/product", tokenAuth, ShowProduct);
router.get("/product/:id", tokenAuth, ShowProductById);
router.post("/product", tokenAuth, multerConfig, AddProduct);
router.patch("/product/:id", tokenAuth, multerConfig, UpdateProduct);
router.delete("/product/:id", tokenAuth, DeleteProduct);

//Cart
router.get("/cart", tokenAuth, ShowCart);
router.get("/cart/:id", tokenAuth, ShowCartById);
router.post("/cart", tokenAuth, AddCart);
router.patch("/cart/:id", tokenAuth, UpdateCart);
router.delete("/cart/:id", tokenAuth, DeleteCart);
router.delete("/clean", tokenAuth, cleanCart);

//Review
router.get("/review", tokenAuth, ShowReview);
router.get("/review/:id", tokenAuth, ShowReviewById);
router.post("/review", tokenAuth, AddReview);
router.patch("/review/:id", tokenAuth, UpdateReview);
router.delete("/review/:id", tokenAuth, DeleteReview);
router.patch("/review/response/:id", tokenAuth, ResponseReview);

//Account
router.get("/account", tokenAuth, ShowAccount);
router.get("/account/:id", tokenAuth, ShowAccountById);
router.post("/account/", AddAccount);
router.patch("/account/:id", UpdateAccount);
router.delete("/account/:id", tokenAuth, DeleteAccount);

//Login
router.post("/login", Login);
router.post("/logout", Logout);
router.get("/cookie", async (req, res) => {
  res.json({ cookie: req.cookies });
});

//Transaction
router.get("/transaction", tokenAuth, ShowTransaction);
router.get("/transaction/:id", tokenAuth, ShowTransactionById);
router.post("/transaction", tokenAuth, AddTransaction);
router.patch("/transaction/status", tokenAuth, UpdateStatusTransaction);
router.delete("/transaction/:id", tokenAuth, DeleteTransaction);

// Payment
router.post("/payment", tokenAuth, payment);
router.get("/payment/notification", tokenAuth, checkPayment);

export default router;
