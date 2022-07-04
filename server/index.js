const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

const cors = require('cors')

// if you dont use this, any requests that involve the body will give an error
// automatically parses jason for requests
app.use(express.json())
app.use(cors())

mongoose.connect(
  'mongodb+srv://user123:Password123@cluster0.udo7kl0.mongodb.net/mern1?retryWrites=true&w=majority'
);

// use req to access info that is sent from the frontend
// use res to send inbformation from the backend
app.get('/getUsers', (req, res) => {
  // get all the data inside the collection
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      // send back info that we got from the collection
      res.json(result);
    }
  });
});

// create route for creating user
app.post('/createUser', async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user)
});

app.listen(4000, () => {
  console.log('Server Running');
});
