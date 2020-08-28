const express = require("express");
const app = express();
const port = 5000;

app.use(express.static("../client/dist"));

app.listen(port, () => {
  console.log(`Nice job, you're connected!`);
});
