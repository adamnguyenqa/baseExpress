const Sequelize = require("sequelize").Sequelize;
const get_config = require("../../configs/index");
const { mysql } = get_config;

module.exports = new Sequelize(
  mysql.adamNguyen.db,
  mysql.adamNguyen.user,
  mysql.adamNguyen.pass,
  {
    host: mysql.adamNguyen.host,
    dialect: "mysql",
    port: mysql.adamNguyen.port,
    pool: {
      max: 100,
      min: 0,
      acquire: 5000,
      idle: 5000,
    },
    logging: false,
  }
);
