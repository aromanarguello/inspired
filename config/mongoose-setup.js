const mongoose = require( "mongoose" );

mongoose.Promise = Promise;

mongoose.connect( process.env.MONGO_URI, { useMongoClient: true } )
.then( () => {
  console.log( 'Mongoose Connected!!!✨✨✨✨✨✨✨✨' );
})
.catch( err => {
  console.log( 'Mongoose connection FAILED!!! 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨' );
  console.log( err );
});
