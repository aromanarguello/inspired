const express   = require('express');
const router    = express.Router();
const SeedModel = require('../models/inspired-model');

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

module.exports = router;
