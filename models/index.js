const adamNguyenUsers = require("./adamNguyen/users");

const adamNguyenDb = async () => {
  try {
    await adamNguyenUsers.findAll();
  } catch (err) {
    adamNguyenUsers
      .sync()
      .then((res) => {
        console.log("Users created");
      })
      .catch((err) => console.log("Users table are not found: ", err));
  }
};

const dbInit = async () => {
  await adamNguyenDb();
};

module.exports = dbInit;
