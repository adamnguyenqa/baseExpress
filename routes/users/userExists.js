const { users } = require("../../models/adamNguyen/index");

module.exports = async (id) => {
  return await users.findOne({ where: { id: id } });
};
