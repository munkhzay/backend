const { request, response } = require("express");

const users = [
  { id: 1, firstName: "john", lastname: "doe" },
  { id: 2, firstname: "james", lastname: "Emily" },
];
exports.deleteUser = (request, response) => {
  const { body } = request;
  const { id } = request.params;
  users.splice(
    users.findIndex((user) => Number(id) === user.id),
    1
  );
  response.status(200).json(users);
};
