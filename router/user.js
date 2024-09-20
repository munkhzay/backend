const express = require("express");
const { getUser } = require("../controller/users/getUser");
const { getUsers } = require("../controller/users/getUsers");
const { createUser } = require("../controller/users/createUser");
const { deleteUser } = require("../controller/users/deleteUser");
const { updateUser } = require("../controller/users/updateUser");
const { getComments } = require("../controller/comment/getComments");
const { createComment } = require("../controller/comment/createComment");
const { deleteComment } = require("../controller/comment/deleteComment");
const { updateComment } = require("../controller/comment/updateComment");
const commentRouter = express.Router();
commentRouter
  .get("/comment", getComments)
  .post("/comment/:id", createComment)
  .delete("/comment/delete/:id", deleteComment)
  .put("/comment/update/:id", updateComment)
  .get("/", getUsers)
  .get("/:id/:title", getUser)
  .post("/:id", createUser)
  .delete("/:id", deleteUser)
  .put("/update/:id", updateUser);

module.exports = commentRouter;
