const datas = [
  {
    id: 1,
    postid: 1,
    like: 30,
    message: "medeelel awy",
    createdTime: "fri Sep 20 2024 09:22:03 GMT+0800",
  },
  {
    id: 2,
    postid: 2,
    like: 39,
    message: "dugaara vldeegerei",
    createdTime: "fri Sep 30 2024 08:44:34 GMT+0800",
  },
];
exports.updateComment = (request, response) => {
  const { id } = request.params;
  const { body } = request;
  datas.filter((data) => data.id === Number(id));
  datas.map((data) => (data.like = body.like));
  response.status(200).json(datas);
};
