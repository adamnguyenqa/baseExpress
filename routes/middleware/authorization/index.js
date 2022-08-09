const { verifyToken } = require("../../../util/token");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  const decoded = await verifyToken(token);

  if (decoded) {
    req.user = decoded;
    next();
    return;
  }

  return res.json({
    statusCode: 401,
    message: "Unauthorized",
  });
};
