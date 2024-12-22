import { DataTypes, Sequelize } from "sequelize";
import db from "../config/config.js";
import Category from "./category.js";
import Account from "./account.js";

const Product = db.define(
  "products",
  {
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
    account_id: {
      type: DataTypes.UUID,
      references: {
        model: Account,
        key: "account_id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
Product.belongsTo(Account, {
  foreignKey: "account_id",
  onDelete: "CASCADE",
});

export default Product;

db.sync();
