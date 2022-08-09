const express = require("express");
const router = express.Router();

const createUserMiddleware = require("./createUser");
const findUserByIdMiddleware = require("./findUserById");
const updateUserByIdMiddleware = require("./updateUserById");
const getAllUserMiddleware = require("./getAllUser");
const deleteUserByIdMiddleware = require("./deleteUserById");
const authorization = require("../middleware/authorization");

router.get("/:userId", authorization, findUserByIdMiddleware);
router.get("/", authorization, getAllUserMiddleware);
router.put("/:userId", authorization, updateUserByIdMiddleware);
router.post("/", createUserMiddleware);
router.delete("/:userId", authorization, deleteUserByIdMiddleware);

module.exports = router;
