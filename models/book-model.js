const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const bookSchema = new Schema ({
  title:  { type: String},
  author: {type: String},
  url:    {type: String}
});

const BookModel = mongoose.mode("Book", bookSchema);
module.exports = BookModel;
