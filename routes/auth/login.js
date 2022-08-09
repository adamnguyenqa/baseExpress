const bcrypt = require("bcrypt");
const { users } = require("../../models/adamNguyen/index");

const { genAccessToken, genRefreshToken } = require("../../util/token");

module.exports = async (req, res) => {
  const { username, password } = req.body;

  const user = await users.findOne({ where: { username: username } });

  if (user) {
    const comparePassword = await bcrypt.compare(password, user.password);
    if (comparePassword)
      return res.json({
        statusCode: 200,
        message: "Login complete",
        accessToken: genAccessToken({ userId: user.id }),
        refreshToken: genRefreshToken({ userId: user.id }),
      });
  }

  return res.json({ statusCode: 400, message: "Username or password wrong" });
};
