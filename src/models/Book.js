const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  imgUrl: String,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
