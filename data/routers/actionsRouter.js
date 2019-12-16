const express = require("express");

const router = express.Router();

const Actions = require("../helpers/actionModel");
// ACTIONS CRUD
// GET
router.get("/", (req, res) => {
  Actions.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({
        error: "Error req, GET server",
        message: "Error 500"
      });
    });
}); // READ / GET

router.get(`/:id`, (req, res) => {
  Actions.get(req.params.id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({
        error: "Error req actions - GET server",
        message: "Error 500"
      });
    });
}); // READ / GET

// POST
router.post("/", (req, res) => {
  Actions.insert(req.body)
    .then(newResource => {
      res.status(201).json(newResource);
    })
    .catch(err => {
      res.status(500).json({ error: "Error req actions - POST server" });
    });
}); // CREATE

// PUT
router.put("/", (req, res) => {
  Actions.update(req.params.id, req.body)
    .then(updatedResource => {
      res.status(200).json(updatedResource);
    })
    .catch(err => {
      console.log("Error req actions - PUT server");
      res.status(500).json({ message: "Error on PUT server" });
    });
}); // UPDATE

router.delete("/", (req, res) => {
  res.status(204).json({
    url: "/actions",
    message: "deleted",
    operation: "DELETE"
  });
}); // DELETE

router.delete(`/:id`, (req, res) => {
  const id = req.params.id;
  console.log(req.params); // to see data implemented when console.log(). ex id = user
  Actions.remove(req.params.id)
    .then(projectDeleted => {
      res.status(200).json({
        message: `You erased ${projectDeleted}`
      });
    })
    .catch(err => {
      console.log("Error req actinos - DELETE server");
      res
        .status(500)
        .json({ error: "Failed to erase req action - DELETE server" });
    });
}); // DELETE

module.exports = router;
