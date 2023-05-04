const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');

const datas = require("./data/datas.json");
// const details = require('./data/userdetails.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server Is running!')
})

// main data loading
app.get('/datas', (req, res) => {
  res.send(datas);
})



// Details data
// app.get("/userdetails", (req, res) =>{
//   res.send(details)
// })

// app.get("/userdetails/:id", (req, res) => {
//   const id = req.params.id;
//   const seletedProfile = details.find((n) => n.id === id);
//   res.send(seletedProfile)
// })


app.get('/datas/:id', (req,res)=>{
  const id = parseInt(req.params.id);
  if(id === 0){
    res.send(details);
  }else{
    const userList = details.filter((n) => parseInt(n.id) === id);
    console.log(userList);
    res.send(userList);
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


