const users = [
  { id: 1, firstName: "john", lastname: "doe" },
  { id: 2, firstname: "james", lastname: "Emily" },
];
exports.updateUser = (request, response) => {
  const { id } = request.params;
  const { body } = request;
  console.log(body);
  users.filter((user) => user.id === Number(id));
  users.map((user) => (user.id = body.id));
  response.status(200).json(users);
};
