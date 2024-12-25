import { Sequelize, DataTypes } from "sequelize";
import db from "../config/config.js";
import Product from "./product.js";
import Account from "./account.js";

const Wishlist = db.define(
  "wishlists",
  {
    wishlist_id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    quantity: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

Wishlist.belongsTo(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});
Wishlist.belongsTo(Account, {
  foreignKey: "account_id",
  onDelete: "CASCADE",
});

export default Wishlist;

db.sync();
