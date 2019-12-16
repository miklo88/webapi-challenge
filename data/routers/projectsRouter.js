const express = require("express");

// projects CRUD
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
}); // CREATE ON THE BODY OBJECT

server.put("/projects", (req, res) => {
  res.status(200).json({
    url: "/projects",
    message: "update a project",
    operation: "PUT"
  });
}); // UPDATE ON THE BODY OBJECT

server.delete("/projects", (req, res) => {
  res.status(204).json({ message: "deleted", operation: "DELETE" });
}); // DELETE
