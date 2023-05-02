const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');

const datas = require("./data/datas.json");

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server Is running!')
})

app.get('/datas', (req, res) => {
  res.send(datas);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
