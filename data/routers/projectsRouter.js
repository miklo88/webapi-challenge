const express = require("express");

const router = express.Router();

const Projects = require("../helpers/projectModel");

// PROJECTS CRUD
// GET
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
}); // READ / GET 0

router.get(`/:id`, (req, res) => {
  Projects.get(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({
        error: "Error req projects - GET server"
      });
    });
}); // READ / GET 1

router.get("/:id/actions", (req, res) => {
  Projects.getProjectActions(req.params.id)
    .then(projectActions => {
      res.status(201).json(projectActions);
    })
    .catch(err => {
      res.status(500).json({
        error: "Error req projects - GET server"
      });
    });
}); // READ / GET 2

// POST
router.post("/", (req, res) => {
  Projects.insert(req.body)
    .then(newResource => {
      res.status(200).json(newResource);
    })
    .catch(err => {
      res.status(500).json({
        error: "Error req projects - POSTS server"
      });
    });
}); // CREATE ON THE BODY OBJECT
// PUT
router.put("/", (req, res) => {
  Projects.update(req.params.id, req.body)
    .then(updatedResource => {
      res.status(200).json(updatedResource);
    })
    .catch(err => {
      console.log("Error req projects - PUT server");
      res.status(500).json({ message: "Error on PUT server" });
    });
}); // UPDATE ON THE BODY OBJECT

router.delete("/", (req, res) => {
  res.status(204).json({
    url: "/projects",
    message: "deleted",
    operation: "DELETE"
  });
}); // DELETE TEST ON 204

router.delete(`/:id`, (req, res) => {
  const id = req.params.id;
  console.log(req.params); // to see data implemented when console.log(). ex id = user
  Projects.remove(req.params.id)
    .then(projectDeleted => {
      res.status(200).json({
        message: `You erased ${projectDeleted}`
      });
    })
    .catch(err => {
      console.log("Error req projects - DELETE server");
      res
        .status(500)
        .json({ error: "Failed to erase req project - DELETE server" });
    });
}); // DELETE

module.exports = router;
