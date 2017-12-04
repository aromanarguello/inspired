require('../config/moongose-setup');

const BookModel = require('../models/book-seed-model');

const bookInfo = [
  {

 }
];
BookModel.create(bookinfo)
.then( bookResults => {
  console.log(portafolioResults);
})
.catch( err => {
  console.log( err );
});
