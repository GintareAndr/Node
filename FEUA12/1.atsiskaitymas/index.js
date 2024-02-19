//const express = require('express');
//const mongoose = require('mongoose');
//const bodyParser = require('body-parser');

//const app = express();
//const port = 4001;

//mongoose.connect ("mongodb://localhost/")//gintare123:gintare123@cluster0.mx0awma.mongodb.net/

//const Service = mongoose.model('Service', {
 // id: Number,
  //name: String,
  //price: Number,
 // description: String
//});

//const User = mongoose.model('User', {
  //  id: Number,
  //  name: String,
  //  surname: String,
  //  email: String,
  //  service_id: Number
 // });
  
  //app.use(bodyParser.json());

//  app.get('/services', async (req, res) => {
 //   const services = await Service.find();
 //   res.json(services);
 // });

  
 // app.get('/users', async (req, res) => {
 //   const users = await User.find().populate('service_id');
 //   res.json(users);
  //});

//  app.post('/services', async (req, res) => {
 //   const newService = req.body;
 //   const service = new Service(newService);
 //   await service.save();
 //   res.json({ message: 'Service added successfully' });
 // });
  
//  app.post('/users', async (req, res) => {
 //   const newUser = req.body;
//    const user = new User(newUser);
 //   await user.save();
 //   res.json({ message: 'User added successfully' });
 // });
  

 // app.listen(4001, () => {
 //   console.log('Server is running on port 4001');
 // });

 

