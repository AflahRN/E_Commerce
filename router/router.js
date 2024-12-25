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
import { login } from "../controllers/loginController.js";
import { ShowTransaction } from "../controllers/transactionController.js";

const router = express.Router();

//category
router.get("/category", ShowCategory);
router.get("/category/:id", ShowCategoryById);
router.post("/category/", AddCategory);
router.patch("/category/:id", UpdateCategory);
router.delete("/category/:id", DeleteCategory);

//Product
router.get("/product", ShowProduct);
router.get("/product/:id", ShowProductById);
router.post("/product/", AddProduct);
router.patch("/product/:id", UpdateProduct);
router.delete("/product/:id", DeleteProduct);

//Cart
router.get("/cart", ShowCart);
router.get("/cart/:id", ShowCartById);
router.post("/cart/", AddCart);
router.patch("/cart/:id", UpdateCart);
router.delete("/cart/:id", DeleteCart);

//Wishlist
router.get("/wishlist", ShowWishlist);
router.get("/wishlist/:id", ShowWishlistById);
router.post("/wishlist/", AddWishlist);
router.patch("/wishlist/:id", UpdateWishlist);
router.delete("/wishlist/:id", DeleteWishlist);

//Review
router.get("/review", ShowReview);
router.get("/review/:id", ShowReviewById);
router.post("/review/", AddReview);
router.patch("/review/:id", UpdateReview);
router.delete("/review/:id", DeleteReview);

//Account
router.get("/account", ShowAccount);
router.get("/account/:id", ShowAccountById);
router.post("/account/", AddAccount);
router.patch("/account/:id", UpdateAccount);
router.delete("/account/:id", DeleteAccount);

//Login
router.post("/login", login);

//Transaction
router.get("/transaction", ShowTransaction);
// router.get("/transaction/:id", ShowTransactionById);
// router.post("/transaction/", AddTransaction);
// router.patch("/transaction/:id", UpdateTransaction);
// router.delete("/transaction/:id", DeleteTransaction);
export default router;
