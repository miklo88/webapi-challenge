const express = require("express");
const helmet = require("helmet");

// SERVER
const server = express();

// ROUTER IMPORTS FOR ROUTERS
const actionsRouter = require("./data/routers/actionsRouter");
const projectsRouter = require("./data/routers/projectsRouter");

//GLOBAL MIDDLEWARE
server.use(express.json());
server.use(helmet());

// ROUTERS BEING UTILIZED FROM IMPORTS.
server.use("/actions", actionsRouter);
server.use("/projects", projectsRouter);

// ENDPOINTS
// this request handler executes when making a GET request to "/

server.get("/", (req, res) => {
  res.status(200).json({
    url: "/",
    message: "Welcome to Carl's Server",
    operation: "GET"
  });
});

module.exports = server;
