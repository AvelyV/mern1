const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://user123:Password123@cluster0.udo7kl0.mongodb.net/mern1?retryWrites=true&w=majority'
);

app.get

app.listen(4000, () => {
  console.log('Server Running');
});
