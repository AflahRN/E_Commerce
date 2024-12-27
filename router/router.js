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
  ShowProduct,
  ShowProductById,
  UpdateProduct,
} from "../controllers/productController.js";
import {
  AddCart,
  DeleteCart,
  ShowCart,
  ShowCartById,
  UpdateCart,
} from "../controllers/cartController.js";
import {
  AddWishlist,
  DeleteWishlist,
  ShowWishlist,
  ShowWishlistById,
  UpdateWishlist,
} from "../controllers/wishlistController.js";
import {
  AddReview,
  DeleteReview,
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
import { Login, Logout, Refresh } from "../controllers/loginController.js";
import {
  AddTransaction,
  DeleteTransaction,
  ShowTransaction,
  ShowTransactionById,
} from "../controllers/transactionController.js";
import { checkPayment, payment } from "../controllers/paymentController.js";
import multer from "multer";
import { tokenAuth } from "../middleware/tokenAuth.js";

const router = express.Router();
const upload = multer({ dest: "/products" });

//category
router.get("/category", ShowCategory);
router.get("/category/:id", tokenAuth, ShowCategoryById);
router.post("/category/", tokenAuth, AddCategory);
router.patch("/category/:id", tokenAuth, UpdateCategory);
router.delete("/category/:id", tokenAuth, DeleteCategory);

//Product
router.get("/product", tokenAuth, ShowProduct);
router.get("/product/:id", tokenAuth, ShowProductById);
router.post("/product/", tokenAuth, upload.single("productImage"), AddProduct);
router.patch(
  "/product/:id",
  tokenAuth,
  upload.single("productImage"),
  UpdateProduct
);
router.delete("/product/:id", tokenAuth, DeleteProduct);

//Cart
router.get("/cart", tokenAuth, ShowCart);
router.get("/cart/:id", tokenAuth, ShowCartById);
router.post("/cart/", tokenAuth, AddCart);
router.patch("/cart/:id", tokenAuth, UpdateCart);
router.delete("/cart/:id", tokenAuth, DeleteCart);

//Wishlist
router.get("/wishlist", tokenAuth, ShowWishlist);
router.get("/wishlist/:id", tokenAuth, ShowWishlistById);
router.post("/wishlist/", tokenAuth, AddWishlist);
router.patch("/wishlist/:id", tokenAuth, UpdateWishlist);
router.delete("/wishlist/:id", tokenAuth, DeleteWishlist);

//Review
router.get("/review", tokenAuth, ShowReview);
router.get("/review/:id", tokenAuth, ShowReviewById);
router.post("/review/", tokenAuth, AddReview);
router.patch("/review/:id", tokenAuth, UpdateReview);
router.delete("/review/:id", tokenAuth, DeleteReview);

//Account
router.get("/account", tokenAuth, ShowAccount);
router.get("/account/:id", tokenAuth, ShowAccountById);
router.post("/account/", tokenAuth, AddAccount);
router.patch("/account/:id", tokenAuth, UpdateAccount);
router.delete("/account/:id", tokenAuth, DeleteAccount);

//Login
router.post("/login", Login);
router.get("/refresh", Refresh);
router.post("/logout", Logout);

//Transaction
router.get("/transaction", tokenAuth, ShowTransaction);
router.get("/transaction/:id", tokenAuth, ShowTransactionById);
router.post("/transaction", tokenAuth, AddTransaction);
// router.patch("/transaction/:id", UpdateTransaction);
router.delete("/transaction/:id", tokenAuth, DeleteTransaction);

// Payment (Sementara)
router.post("/payment", payment);
router.get("/payment/notification", checkPayment);
// router.post("/payment/notification", getStatusPayment());

export default router;
