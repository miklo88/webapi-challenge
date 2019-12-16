const express = require("express");
const router = express.Router();
// projects CRUD
router.get("/", (req, res) => {
  res.status(200).json({
    url: "/projects",
    message: "homepage of projects GET endpoint",
    operation: "GET"
  });
}); // READ / GET

router.get("/:id", (req, res) => {
  res.status(200).json({
    url: "/projects",
    message: "homepage of projects actions GET endpoint",
    operation: "GET"
  });
});

router.post("/", (req, res) => {
  res.status(201).json({
    url: "/projects",
    message: "post a project",
    operation: "POST"
  });
}); // CREATE ON THE BODY OBJECT

router.put("/", (req, res) => {
  res.status(200).json({
    url: "/projects",
    message: "update a project",
    operation: "PUT"
  });
}); // UPDATE ON THE BODY OBJECT

router.delete("/", (req, res) => {
  res.status(204).json({ message: "deleted", operation: "DELETE" });
}); // DELETE

module.exports = router;
