const { responseCode } = require("../../const/index");
const bcrypt = require("bcrypt");

const userExists = require("./userExists");
const { users } = require("../../models/adamNguyen");

module.exports = async (req, res) => {
  try {
    const { userId } = req.user;

    const user = await userExists(userId);

    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    // if (req.body.username) {
    //   const usernameExists = await users.findOne({
    //     where: { username: req.body.username },
    //   });

    //   if (usernameExists) {
    //     return {
    //       statusCode: 400,
    //       message: "Username already exists",
    //     };
    //   }
    // }

    await user.update({
      username: req.body?.username,
      password: req.body?.password,
    });

    return res.json({
      statusCode: responseCode.success,
      message: `Update sucess user id: ${userId}`,
      data: req.body,
    });
  } catch (err) {
    console.log(err);
    return {
      statusCode: 400,
      message: err,
    };
  }
};
