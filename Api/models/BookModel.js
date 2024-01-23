const mongoose = require('mongoose');
<<<<<<< Updated upstream
const Schema = mongoose.Schema;

const BookModel = new Schema({
    bookName: String,
    bookDescription: String,
    publicationYear: Number
});

module.exports = mongoose.model('Book', BookModel);
=======

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  description: String
});

const Book = mongoose.model('Book', userSchema);

module.exports = Book;
>>>>>>> Stashed changes
