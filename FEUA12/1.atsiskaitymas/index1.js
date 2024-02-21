const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 4001;

mongoose.connect ("mongodb+srv://gintare123:gintare123@cluster0.mx0awma.mongodb.net/")

const Membership = mongoose.model('Membership', {
    id: Number,
  });

  app.get('/memberships', async (req, res) => {
    const memberships = await Membership.find();
    res.json(memberships);
 });
  
  app.post('/memberships', async (req, res) => {
    const newMembership = req.body;
    const membership = new Membership(newMembership);
    await membership.save();
    res.json({ message: 'Membership added successfully' });
 });

  app.delete('/memberships/:id', async (req, res) => {
    const id = req.params.id;
    await Membership.deleteOne({ id: id });
    res.json({ message: 'Membership deleted successfully' });
  });
  
  app.get('/users/:order', async (req, res) => {
    const order = req.params.order;
    const users = await User.find().sort({ name: order });
    res.json(users);
  });
  
  app.post('/users', async (req, res) => {
    const newUser = req.body;
    const user = new User(newUser);
    await user.save();
    res.json({ message: 'User added successfully' });
  });
  
 app.listen(4001, () => {
    console.log('Server is running on port 4001');
  }); 