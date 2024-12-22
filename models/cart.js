import { Sequelize, DataTypes } from "sequelize";
import db from "../config/config.js";
import Product from "./product.js";
import Account from "./account.js";

const Cart = db.define(
  "carts",
  {
    cart_id: {
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

Cart.belongsTo(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});
Cart.belongsTo(Account, {
  foreignKey: "account_id",
  onDelete: "CASCADE",
});

export default Cart;

db.sync();
