import { Sequelize, DataTypes } from "sequelize";
import db from "../config/config.js";
import Account from "./account.js";

const Transaction = db.define("transactions", {
  transaction_id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  transaction_date: {
    type: DataTypes.DATEONLY,
    defaultValue: Sequelize.fn("now"),
  },
  gross_amount: DataTypes.INTEGER,
});

Transaction.belongsTo(Account, {
  foreignKey: "account_id",
  onDelete: "CASCADE",
});

export default Transaction;
