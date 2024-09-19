const { request } = require("express");

const users = [
  { id: 1, firstName: "john", lastname: "doe" },
  { id: 2, firstname: "james", lastname: "Emily" },
];
exports.getUsers = (request, response) => {
  response.status(200).json({ users: users });
};
