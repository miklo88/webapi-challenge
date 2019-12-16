const express = require("express");
const router = express.Router();
// actions CRUD ---move out of here getting to cluttery. same with projects
server.get("/actions", (req, res) => {
  res.status(200).json({
    url: "/actions",
    message: "homepage of client projects",
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

server.delete("/actions/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params); // to see data implemented when console.log(). ex id = user
  res.status(204);
}); // DELETE
