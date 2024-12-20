import { Sequelize, DataTypes } from "sequelize";
import db from "../config/config.js";
import Product from "./product.js";

const Review = db.define(
  "reviews",
  {
    review_id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    review_text: DataTypes.TEXT,
    review_skor: DataTypes.DOUBLE,
    product_id: {
      type: DataTypes.UUID,
      references: {
        model: Product,
        key: "product_id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Review.belongsTo(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

export default Review;

db.sync();
