const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    location: String,
    username: String,
    password: String,
  })

  const UserModel = mongoose.model("usersData",UserSchema);
  module.exports = UserModel;