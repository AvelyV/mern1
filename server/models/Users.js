const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// first is table name in MongoDB Compass
const UserModel = mongoose.model("users", "userSchema")
module.exports = UserModel