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

export default router;
