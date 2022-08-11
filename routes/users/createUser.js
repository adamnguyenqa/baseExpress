const bcrypt = require("bcrypt");
const { users } = require("../../models/adamNguyen/index");

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    const passwordHashed = await bcrypt.hash(password, 10);

    const role = "GUESS";
    await users.create({ username, password: passwordHashed, role });

    return res.json({
      statusCode: 200,
      message: "Create success",
      data: { username, password },
    });
  } catch (err) {
    console.log(err);
    return res.json({
      statusCode: 400,
      message: "User create fail",
      error: err.errors.map((err) => err.message),
    });
  }
};
