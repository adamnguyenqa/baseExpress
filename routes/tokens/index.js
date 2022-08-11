const express = require("express");
const getTokenByTokenAddress = require("./getTokenByTokenAddress");
const getTop1000PairsOnPancakeSwap = require("./getTop1000PairsOnPancakeSwap");

const router = express.Router();

router.get("/", getTop1000PairsOnPancakeSwap);
router.get("/:tokenAddress", getTokenByTokenAddress);

module.exports = router;
