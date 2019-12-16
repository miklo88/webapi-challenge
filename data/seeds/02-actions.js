exports.seed = function(knex, Promise) {
  // deletes exisiting entries.
  return knex("actions")
    .del()
    .then(function() {
      // adds entries
      return knex("actions").insert([
        {
          project_id: 1,
          description: "Fork and Clone Repository",
          notes:
            "Repo URL: https://github.com/LambdaSchool/Sprint-Challenge-Node-Express"
        },
        {
          project_id: 1,
          description: "Install Dependencies",
          notes: "Remember to cd into the folder where the Project was cloned"
        },
        {
          project_id: 1,
          description: "Design and Build API Endpoints",
          notes: "This is where the magic happens!"
        }
      ]);
    });
};

// const sortField = req.query.sortby || 'project_id';
// const field = [
//   dummy: 1,
//   data: 'fooBar'
// ]

// server.post('/actions', (req, res) => {
//   const actions = req.body;
//   action.id = nextId++;

//   actions.push(action)

//   res.status(201).json(actions);
// })
// server.delete("/actions/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(req.params); // to see data implemented when console.log(). ex id = user
//   res.status(204);
// });
