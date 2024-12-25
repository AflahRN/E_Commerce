import { Sequelize, DataTypes } from "sequelize";
import db from "../config/config.js";
import Account from "./account.js";

const Transaction = db.define("transactions", {
  transaction_id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  order_id: {
    type: DataTypes.STRING,
  },
  transaction_date: {
    type: DataTypes.DATEONLY,
  },
  gross_amount: DataTypes.INTEGER,
});

Transaction.belongsTo(Account, {
  foreignKey: "account_id",
  onDelete: "CASCADE",
});

export default Transaction;
