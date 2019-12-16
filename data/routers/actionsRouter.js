const express = require("express");
const router = express.Router();
// actions CRUD ---move out of here getting to cluttery. same with projects
router.get("/", (req, res) => {
  res.status(200).json({
    url: "/actions",
    message: "homepage of actions GET endpoint",
    operation: "GET"
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
