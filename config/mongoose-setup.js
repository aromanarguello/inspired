const mongoose = require( "mongoose" );

mongoose.Promise = Promise;

mongoose.connect( "mongodb://heroku_vrvkst0h:tvh2foc8p0imto5bt0i5cfpo7a@ds129796.mlab.com:29796/heroku_vrvkst0h", { useMongoClient: true } )
.then( () => {
  console.log( 'Mongoose Connected!!!✨✨✨✨✨✨✨✨' );
})
.catch( err => {
  console.log( 'Mongoose connection FAILED!!! 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨' );
  console.log( err );
});
