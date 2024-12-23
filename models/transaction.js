import { Sequelize, DataTypes } from "sequelize";
import db from "../config/config";
import Product from "./product";
import Account from "./account";

const Transaction = db.define("transactions", {
  transaction_id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.UUID,
    references: {
      key: "product_id",
      model: Product,
    },
  },
  quantity: DataTypes.INTEGER,
  account_id: {
    type: DataTypes.UUID,
    references: {
      key: "account_id",
      model: Account,
    },
  },
});

Transaction.belongsTo(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

Transaction.belongsTo(Account, {
  foreignKey: "account_id",
  onDelete: "CASCADE",
});

export default Transaction;
