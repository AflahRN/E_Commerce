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

export default router;
