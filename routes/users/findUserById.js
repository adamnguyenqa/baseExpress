const { responseCode } = require("../../const/index");

const userExists = require("./userExists");

module.exports = async (req, res) => {
  const { userId } = req.params;
  const user = await userExists(userId);

  return res.json({
    statusCode: responseCode.success,
    message: "Find user by id",
    data: user,
  });
};
