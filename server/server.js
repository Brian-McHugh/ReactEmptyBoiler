const express = require("express");
const app = express();
const port = 1234;
const { postTask, getTasks, deleteTask } = require("../db/query");

app.use(express.static("../client/dist"));
app.use(express.json());

app.get("/allTasks", (req, res) => {
  getTasks((err, data) => {
    if (err) {
      console.log("err in getting tasks from server");
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.post("/postTask", (req, res) => {
  postTask(req.body.task, (err, data) => {
    if (err) {
      console.log("err in postTask in server");
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.delete("/deleteTask", (req, res) => {
  deleteTask(req.query.task, (err, data) => {
    if (err) {
      console.log("err in deleting task in server");
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`hurray, you're connected to port ${port}`);
});
