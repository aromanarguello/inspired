const express        = require('express');
const router         = express.Router();
const SeedModel      = require('../models/inspired-model');
const ScheduleModel  = require('../models/schedule-model');

/* GET home page. */
router.get('/', (req, res, next) => {
  SeedModel
  .find()
  .limit(15)
  .exec()
  .then( seedResults =>{
    res.locals.seed = seedResults;

  })
  .catch( err => {
    console.log( err );
    console.log("SHIITT");
  });

  SeedModel
  .find()
  .limit(25)
  .sort()
  .exec()
  .then( sortedSeedResults => {
    res.locals.seedSorted = sortedSeedResults;
    res.render("index");
  })
  .catch( err => {
    console.log( err );
  });
});

router.post('/', (req, res, next) => {
  const scheduleFormSubmission = {
    firstName:  req.body.firstName,
    lastName:   req.body.lastName,
    email:      req.body.email,
    message:    req.body.message,
    dateAdded:  new Date()
  };

const scheduleModel = new ScheduleModel( scheduleFormSubmission );
scheduleModel.save( err => {
  if ( err ) {
    return next( err );
  }
  res.redirect("/");
  });

});

module.exports = router;
