const Sequelize = require("sequelize");
const sequelize = require("./sequelize");

const users = sequelize.define(
  "users",
  {
    username: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = users;
