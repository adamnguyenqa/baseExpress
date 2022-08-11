const responseCode = require("../../../const/response_code");

module.exports = {
  checkAdmin: (req, res, next) => {
    const { role } = req.user;
    console.log(role);
    if (role != "ADMIN") {
      return res.json({
        statusCode: responseCode.permission_denied,
        message: "Permission denied",
      });
    }
    next();
  },
  checkCustomer: (req, res, next) => {
    const { role } = req.user;

    if (role != "CUSTOMER") {
      return res.json({
        statusCode: responseCode.permission_denied,
        message: "Permission denied",
      });
    }
    next();
  },
  checkGuess: (req, res, next) => {
    const { role } = req.user;

    if (role != "GUESS") {
      return res.json({
        statusCode: responseCode.permission_denied,
        message: "Permission denied",
      });
    }
    next();
  },
};
