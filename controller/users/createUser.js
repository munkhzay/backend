const users = [
  { id: 1, firstName: "john", lastname: "doe" },
  { id: 2, firstname: "james", lastname: "Emily" },
];
exports.createUser = (request, response) => {
  const { id } = request.body;
  // const { id} = request.body;
  users.push({ id });
  console.log(request.body);
  response.status(200).json({ users });
};
