import { Sequelize, DataTypes } from "sequelize";
import db from "../config/config.js";

const Account = db.define("account", {
  account_id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  type: DataTypes.ENUM("saler", "customer"),
});

export default Account;

db.sync();
