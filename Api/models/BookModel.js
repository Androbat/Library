const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookModel = new Schema({
    bookName: String,
    bookDescription: String,
    publicationYear: Number
});

module.exports = mongoose.model('Book', BookModel);