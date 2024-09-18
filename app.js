import express from "express";

const app = express();
app.use(express.json());

const port = 8080;

const articles = [
  { id: 1, title: "lorem", description: "uashdfuashdf" },
  { id: 2, title: "lorem2", description: "uashdfuashdf" },
];

app.get("/articles", (_request, response) => {
  return response.send(articles);
});

app.post("/articles", (request, response) => {
  const { title, description } = request.body;

  articles.push({ id: 3, title, description });

  return response.send(articles);
});

app.delete("/articles", (request, response) => {
  const { id } = request.query;

  const deletArticleIndex = articles.findIndex((article) => {
    return `${article.id}` === id;
  });

  articles.splice(deletArticleIndex, 1);

  return response.send(articles);
});

app.listen(port, () => {
  console.log(` http://localhost:${port}/ `);
});

// CRUD
// C - create /post method/
// R - read /get method/
// U - update /put method/
// D - delete /delete method/
