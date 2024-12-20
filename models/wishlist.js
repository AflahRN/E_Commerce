import { Sequelize, DataTypes } from "sequelize";
import db from "../config/config.js";
import Product from "./product.js";

const Wishlist = db.define("wishlist", {
  wishlist_id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.UUID,
    references: {
      model: Product,
      key: "product_id",
    },
  },
  quantity: DataTypes.INTEGER,
});

Wishlist.belongsTo(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

export default Wishlist;

db.sync();
