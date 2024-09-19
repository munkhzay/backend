const express = require("express");
const { getUser } = require("../controller/users/getUser");
const { getUsers } = require("../controller/users/getUsers");
const { createUser } = require("../controller/users/createUser");
const { deleteUser } = require("../controller/users/deleteUser");
const { updateUser } = require("../controller/users/updateUser");
const userRouter = express.Router();
userRouter
  .get("/", getUsers)
  .get("/:id", getUser)
  .post("/:id", createUser)
  .delete("/:id", deleteUser)
  .put("/update/", updateUser);

module.exports = userRouter;
