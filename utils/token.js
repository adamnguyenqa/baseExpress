const jwt = require("jsonwebtoken");

module.exports = {
  genAccessToken: (data) => {
    return jwt.sign(data, "secret", { expiresIn: "4h" });
  },
  genRefreshToken: (data) => {
    return jwt.sign(data, "secret", { expiresIn: "1d" });
  },
  verifyToken: async (token) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, "secret", (err, result) => {
        if (err) {
          return resolve(undefined);
        } else {
          return resolve(result);
        }
      });
    });
  },
};
