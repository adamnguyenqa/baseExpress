const express = require("express");
const router = express.Router();

const { authorization, checkAdmin } = require("../middleware");

const createUser = require("./createUser");
const findUserById = require("./findUser");
const updateUser = require("./updateUser");
const updateUserById = require("./updateUserById");
const getAllUser = require("./getAllUser");
const deleteUserById = require("./deleteUserById");
const checkDuplicate = require("../middleware/checkDuplicate");
const deleteUser = require("../users/deleteUser");
router.post("/", checkDuplicate, createUser);

router.get("/:userId", authorization, checkAdmin, findUserById);
router.put("/:userId", authorization, checkAdmin, updateUserById);
router.delete("/:userId", authorization, checkAdmin, deleteUserById);
router.get("/", authorization, checkAdmin, getAllUser);
router.put("/", authorization, checkDuplicate, updateUser);
router.delete("/", authorization, deleteUser);

module.exports = router;
