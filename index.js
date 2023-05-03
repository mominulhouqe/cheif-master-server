const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');

const datas = require("./data/datas.json");
const details = require('./data/userdetails.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server Is running!')
})




app.get('/datas', (req, res) => {
  res.send(datas);
})

// main data loading
app.get('/datas/:id', (req,res)=>{
  const id = parseInt(req.params.id);
  if(id === 0){
    res.send(details)
  }
})


// Details data
app.get("/details", (req, res) =>{
  res.send(details)
})

app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  const seletedProfile = details.find((n) => n.id === id);
  res.send(seletedProfile)
})












app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


