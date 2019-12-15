/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just API…
I need this code, just don't know where, perhaps should make some middleware, don't worry, just API

Go code!
*/

const express = require("express");

const port = 5000;

const server = express();
server.use(express.json());

// server.get("/", (req, res) => {
//   res.send("Hello from Carl's API on the server side!");
// });
// establish dymanic routing.

// this request handler executes when making a GET request to /route
server.get("/", (req, res) => {
  res
    .status(200)
    .json({ url: "/", message: "server homepage", operation: "GET" });
});
server.get("/projects", (req, res) => {
  res.status(200).json({
    url: "/projects",
    message: "homepage of what client sees",
    operation: "GET"
  });
}); // READ / GET

server.post("/projects", (req, res) => {
  res.status(201).json({
    url: "/projects",
    message: "post a project",
    operation: "POST"
  });
}); // CREATE

server.put("/projects", (req, res) => {
  res.status(200).json({
    url: "/projects",
    message: "update a project",
    operation: "PUT"
  });
}); // UPDATE

server.delete("/projects", (req, res) => {
  res.status(204).json({ message: "deleted", operation: "DELETE" });
}); // DELETE

server.get("/actions", (req, res) => {
  res.status(200).json({
    url: "/actions",
    message: "homepage of what client sees",
    operation: "GET"
  });
}); // READ / GET

server.post("/actions", (req, res) => {
  res.status(201).json({
    url: "/actions",
    message: "post a project",
    operation: "POST"
  });
}); // CREATE

server.put("/actions", (req, res) => {
  res.status(200).json({
    url: "/actions",
    message: "update a project",
    operation: "PUT"
  });
}); // UPDATE

server.delete("/actions", (req, res) => {
  res.status(204).json({ message: "deleted", operation: "DELETE" });
}); // DELETE

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
