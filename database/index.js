
const express = require('express')
const mongoose = require('mongoose');
const app = express();
const port = 30


const userModel=require('./usermodel');


app.use(express.json());

const dbURI= 'mongodb+srv://<username>:<password>@cluster0.f8qsjtg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

 try {
     const connextionInstance= mongoose.connect(dbURI);
    console.log(`database connction sucessful...`)
    console.log(`${connextionInstance.connection.host()}`)
} catch (error) {
    handleError(error);
    console.log(`database connction error...`)
  }

app.get('/', (req, res) => { 
  res.send('Hello World!');
  console.log(`i am not calling burger ...`)
})



app.listen(port, () => {
  console.log(`Example app listening ${hostname}:${port}`)
})