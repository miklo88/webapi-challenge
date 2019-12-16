const express = require("express");

const router = express.Router();

const Actions = require("../helpers/actionModel");
// ACTIONS CRUD
router.get("/", (req, res) => {
  Actions.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({
        error: "Error req, server",
        message: "Error 500"
      });
    });
}); // READ / GET

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    url: "/actions",
    message: `homepage of actions project GET endpoint`,
    operation: "GET"
  });
});

router.post("/", (req, res) => {
  res.status(201).json({
    url: "/actions",
    message: "POST a project",
    operation: "POST"
  });
}); // CREATE

router.put("/", (req, res) => {
  res.status(200).json({
    url: "/actions",
    message: "update a project",
    operation: "PUT"
  });
}); // UPDATE

router.delete("/", (req, res) => {
  res.status(204).json({
    url: "/actions",
    message: "deleted",
    operation: "DELETE"
  });
}); // DELETE

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params); // to see data implemented when console.log(). ex id = user
  res.status(204).json({
    url: "/actions"
  });
}); // DELETE

module.exports = router;
