const express = require("express");
require('dotenv').config();
const port = process.env.PORT;
const { postTask, getTasks, deleteTask } = require("../db/query");
const app = express();

app.use(express.static("../client/dist/"));
app.use(express.json());

app.get("/tasks", (req, res) => {
  getTasks()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

app.post("/tasks", (req, res) => {
  postTask(req.body.task)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.delete("/tasks/:id", (req, res) => {
  deleteTask(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`hurray, you're connected to port ${port}`);
});
