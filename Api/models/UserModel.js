const mongoose = require('mongoose');
<<<<<<< Updated upstream
const Schema = mongoose.Schema;

const UserModel = new Schema({
  id: String,
=======

const userSchema = new mongoose.Schema({
>>>>>>> Stashed changes
  name: String,
  email: String,
  password: String
});

<<<<<<< Updated upstream
module.exports = mongoose.model('User', UserModel);
=======
const User = mongoose.model('User', userSchema);

module.exports = User;
>>>>>>> Stashed changes
