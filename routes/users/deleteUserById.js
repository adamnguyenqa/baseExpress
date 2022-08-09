const { users } = require("../../models/adamNguyen/index");

module.exports = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await users.findOne({ where: { id: userId } });

    if (!user)
      return res.json({ statusCode: 400, message: "User id not found" });

    await user.destroy();

    return res.json({
      statusCode: 200,
      message: `Delete user: ${userId} success`,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      statusCode: 400,
      message: "User delete fail",
      error: err.errors.map((err) => err.message),
    });
  }
};
