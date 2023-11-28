const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema({
  id: String,
  name: String,
  email: String,
  password: String
});

module.exports = mongoose.model('User', UserModel);