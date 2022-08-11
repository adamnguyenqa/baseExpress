const authorization = require("./authorization");
const permissionCheck = require("./permissionCheck/index");

module.exports = { authorization, ...permissionCheck };
