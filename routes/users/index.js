const express = require("express");
const router = express.Router();

const createUser = require("./createUser");
const findUserById = require("./findUserById");
const updateUserById = require("./updateUser");
const getAllUser = require("./getAllUser");
const deleteUserById = require("./deleteUserById");
const authorization = require("../middleware/authorization");

router.get("/:userId", authorization, findUserById);
router.get("/", authorization, getAllUser);
router.put("/", authorization, updateUserById);
router.post("/", createUser);
router.delete("/:userId", authorization, deleteUserById);

module.exports = router;
