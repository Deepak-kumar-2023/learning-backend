const mongoose = require('mongoose');
 ( async() => {
  await mongoose.connect('mongodb+srv://<username>:<password>@cluster0.f8qsjtg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/dbname');
    console.log('Connected to database.. !');
})()

const kittySchema = new mongoose.Schema({
    name: String
  });
  const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({ name: 'Silence' });
  const silence1 = new Kitten({ name: 'lol' });
  
  // console.log(silence.name); 