const express = require("express");
const userRouter = require("./router/user");
const commentRouter = require("./router/user");
const app = express();
app.use(express.json());
const port = 8080;
app.use(commentRouter);
app.listen(port, () => {
  console.log(`server running at a hhtp://localhost:${port}/`);
});
