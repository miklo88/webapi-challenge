const express = require("express");

const router = express.Router();

const Projects = require("../helpers/projectModel");
// PROJECTS CRUD
router.get("/", (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({
        error: "Error req - GET server",
        message: "Error 500"
      });
    });
}); // READ / GET

router.get("/:id", (req, res) => {
  Projects.getProjectActions(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({
        error: "Error req projects - GET server"
      });
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
