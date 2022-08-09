const express = require("express");
const router = express.Router();

const createUserMiddleware = require("./createUserMiddleware");
const findUserByIdMiddleware = require("./findUserById");
const updateUserByIdMiddleware = require("./updateUserByIdMiddleware");
const getAllUserMiddleware = require("./getAllUserMiddleware");
const deleteUserByIdMiddleware = require("./deleteUserById");

router.get("/:userId", findUserByIdMiddleware);

router.get("/", getAllUserMiddleware);

router.put("/:userId", updateUserByIdMiddleware);

router.post("/", createUserMiddleware);

router.delete("/:userId", deleteUserByIdMiddleware);

module.exports = router;
