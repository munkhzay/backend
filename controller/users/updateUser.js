// const users = [
//   { id: 1, firstName: "john", lastname: "doe" },
//   { id: 2, firstname: "james", lastname: "Emily" },
// ];
exports.updateUser = (request, response) => {
  //   const { title } = request.body;
  let users = [{ id: 1 }];
  //   const findIndex = users.findIndex((user) => user.id === Number(id));
  //   users.splice(Number(id - 1), Number(id));
  users.pop();
  users.push({ ...request.body });
  response.status(200).json(users);
};
