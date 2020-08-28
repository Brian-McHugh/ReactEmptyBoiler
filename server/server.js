const express = require('express');
const app = express();

app.use(express.static('../client/dist'));

app.listen(3000, () => {
  console.log(`あのさ、you're connected to port 3000 haHA ~ `)
});
