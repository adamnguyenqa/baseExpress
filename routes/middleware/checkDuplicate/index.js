const { users } = require("../../../models/adamNguyen");

module.exports = async (req, res, next) => {
  if (req.body) {
    if (req.body.username) {
      const userExists = await users.findOne({
        where: { username: req.body.username },
      });

      if (userExists)
        return res.json({
          statusCode: 404,
          message: "Username already exists",
        });
    }
  }

  next();
};
