// import { createServer, request } from "http";
// import express, { response } from "express";
// const port = 8080;
// const app = express();
// app.use(express.json());
// // const server = createServer((request, response) => {
// //   response.statusCode = 200;
// //   response.setHeader("Content-Type", "text/plain");
// //   response.end("Hello world");
// //   console.log(request);
// // });

// const { request, response } = require("express");

// app.get("/articles", (request, response) => {
//   response.send("hello munkhzaya");
// });
// app.post("/articles", (request, response) => {
//   const { title } = request.body;
//   return response.send(` ${title}`);
// });
// app.delete("/articles", (request, response) => {
//   const { title } = request.body;
//   console.log(title);
//   return response.send(`${title}`);
// });
// // app.post("artisl", (request, response) => {
// //   const { newtitle } = request.body;
// //   response.send(`dahin post ywullla ${newtitle}`);
// // });
// // app.listen(port, () => {
// //   response.send(`hhh http://localhost:${port}/`);
// // });
// app.listen(port, () => {
//   console.log(` http://localhost:${port}/ `);
// });
const express = require("express");
const userRouter = require("./router/user");
const app = express();
app.use(express.json());
const port = 8080;
app.use(userRouter);
app.listen(port, () => {
  console.log(`server running at a hhtp://localhost:${port}/`);
});
