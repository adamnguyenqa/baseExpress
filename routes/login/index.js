const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res.json("This is login please use post");
});

module.exports = router;
