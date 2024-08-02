const express=require('express');
const sendmail = require('./controllers/sendmail');
const app=express();
const port=3000;


app.get('/',(req,res)=>{
    res.send('Hello World');
}
);

app.get('/sendmail',sendmail,(req,res)=>{})

app.listen(port,()=>{
    console.log('Server is running at port 3000');
} )