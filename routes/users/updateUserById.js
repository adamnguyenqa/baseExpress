const { responseCode } = require("../../const/index");
const bcrypt = require("bcrypt");

const userExists = require("./userExists");

module.exports = async (req, res) => {
  const { userId } = req.params;

  const user = await userExists(userId);

  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }
  await user.update({
    username: req.body?.username,
    password: req.body?.password,
  });

  return res.json({
    statusCode: responseCode.success,
    message: `Update sucess user id: ${userId}`,
    data: req.body,
  });
};
