const users = [
  { id: 1, firstName: "john", lastname: "doe" },
  { id: 2, firstname: "james", lastname: "Emily" },
];
exports.deleteUser = (request, response) => {
  const { id } = request.params;
  const { body } = request;
  users.splice(users.findIndex((user) => user.id === Number(id)));
  response.status(200).json({ users });
};
