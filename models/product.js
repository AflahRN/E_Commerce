import { DataTypes, Sequelize } from "sequelize";
import db from "../config/config.js";
import Category from "./category.js";

const Product = db.define("Product", {
  product_id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  product_name: DataTypes.STRING,
  product_description: DataTypes.STRING,
  product_price: DataTypes.STRING,
  product_stock: DataTypes.STRING,
  product_picture: DataTypes.STRING,
  product_varian: DataTypes.STRING,
  category_id: {
    type: DataTypes.UUID,
    references: {
      model: Category,
      key: "category_id",
    },
  },
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

export default Product;

db.sync();
