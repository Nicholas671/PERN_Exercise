const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const About = sequelize.define(
  "About",
  {
    photoPath: {
      type: DataTypes.STRING,
      alllowNull: false,
      field: "photo_path",
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    tableName: "about",
    timestamps: true,
    underscored: true,
  },
);

module.exports = About;
