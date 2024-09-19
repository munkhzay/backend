const users = [
  { id: 1, firstName: "john", lastname: "doe" },
  { id: 2, firstname: "james", lastname: "Emily" },
];
exports.deleteUser = (request, response) => {
  const { id } = request.params;

  const findIndex = users.findIndex((user) => user.id === Number(id));
  users.splice(Number(id - 1), Number(id));
  response.status(200).json({ users });
};
