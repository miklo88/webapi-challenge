/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just API…
I need this code, just don't know where, perhaps should make some middleware, don't worry, just API

Go code!
*/

const express = require("express");

const port = 5000;

const server = express();
server.use(express.json());

// server.get("/", (req, res) => {
//   res.send("Hello from Carl's API on the server side!");
// });
// establish dymanic routing.

// this request handler executes when making a GET request to /route
server.get("/", (req, res) => {
  res.status(200).send("<h1>Homepage</h1>");
});

server.get("/", (req, res) => {
  res.status(200).send("<h1>Project Form</h1>");
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
