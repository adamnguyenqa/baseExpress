const { users } = require("../../models/adamNguyen/index");

module.exports = async (req, res) => {
  try {
    const allUsers = await users.findAll();
    return res.json({ statusCode: 200, data: allUsers });
  } catch (err) {
    return res.json({
      statusCode: 400,
      message: "Query users fail",
      error: err.errors.map((err) => err.message),
    });
  }
};
