import { createServer, request } from "http";
import express, { response } from "express";
const port = 8080;
const app = express();
app.use(express.json());
// const server = createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader("Content-Type", "text/plain");
//   response.end("Hello world");
//   console.log(request);
// });

app.get("/articles", (request, response) => {
  response.send("hello munkhzaya");
});
app.post("/articles", (request, response) => {
  const { title } = request.body;
  const { newtitle } = request.body;
  return response.send(` ${title}`);
});

// app.post("artisl", (request, response) => {
//   const { newtitle } = request.body;
//   response.send(`dahin post ywullla ${newtitle}`);
// });
// app.listen(port, () => {
//   response.send(`hhh http://localhost:${port}/`);
// });
app.listen(port, () => {
  console.log(` http://localhost:${port}/ `);
});
