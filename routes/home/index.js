const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Hello this is Adam Nguyen's API");
});

module.exports = router;
