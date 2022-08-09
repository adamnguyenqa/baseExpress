const express = require("express");
const router = express.Router();

const login = require("./login");

router.get("/", (req, res) => {
  return res.json("This is login please use post");
});

router.post("/", login);

module.exports = router;
