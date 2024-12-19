import { Sequelize } from "sequelize";
import db from "../config/config.js";

const { DataTypes } = Sequelize;

const Category = db.define(
  "categories",
  {
    category_id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    category_name: DataTypes.STRING(255),
  },
  { freezeTableName: true }
);

export default Category;

db.sync();
