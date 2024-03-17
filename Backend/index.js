const express = require('express')
const { uuid } = require('uuidv4');
const app = express()
const port = 3000

const mongoose = require('mongoose');
const { accessKeyId, secretAccessKey, mongoString } = require('./config');

mongoose.connect(mongoString).then(()=>{
    console.log("connected to mongo");
}).catch((err)=>{
    console.log(err);
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/upload', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
