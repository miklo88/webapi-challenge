const express = require("express");
const router = express.Router();
// PROJECTS CRUD
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
  res.status(204).json({
    url: "/projects",
    message: "deleted",
    operation: "DELETE"
  });
}); // DELETE

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params); // to see data implemented when console.log(). ex id = user
  res.status(204).json({
    url: "/projects"
  });
}); // DELETE

module.exports = router;
