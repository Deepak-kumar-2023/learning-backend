const mongoose = require('mongoose');




  const userSchema= new mongoose.Schema({
       username:String,
    });
    
    mongoose.exports= mongoose.model('user',userSchema);
    console.log(`user model is exported...`);

