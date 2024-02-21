const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 4001;

mongoose.connect("mongodb+srv://gintare123:gintare123@cluster0.mx0awma.mongodb.net/");


const ServiceSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  description: String
});

const Service = mongoose.model('Service', ServiceSchema);

const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  surname: String,
  email: String,
  service_id: Number 
});

const User = mongoose.model('User', UserSchema);

app.use(bodyParser.json());

app.get('/services', async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

app.get('/users', async (req, res) => {
  const users = await User.find().populate('service_id');
  res.json(users);
});

app.post('/services', async (req, res) => {
  const newService = req.body;
  const service = new Service(newService);
  await service.save();
  res.json({ message: 'Service added successfully' });
});

app.post('/users', async (req, res) => {
  const newUser = req.body;
  const user = new User(newUser);
  await user.save();
  res.json({ message: 'User added successfully' });
});

app.post('/sampleUser', async (req, res) => {
  const sampleUser = new User({
    id: "1",
    name: "Gintare",
    surname: "Andriune",
    email: "gintare@gintare.com",
    service_id: "1"
  });
  await sampleUser.save();
  res.json({ message: 'Sample User added successfully' });
});


app.get('/sampleUser', async (req, res) => {
  const user = await User.findOne({ id: "1" });
  res.json(user);
});





app.listen(4001, () => {
  console.log('Server is running on port 4001');
});
