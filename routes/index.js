const express         = require('express');
const router          = express.Router();
const SeedModel       = require('../models/inspired-model');
const ScheduleModel   = require('../models/schedule-model');
const PortafolioModel = require('../models/portafolio-model');

/* GET home page. */
router.get('/', (req, res, next) => {
  SeedModel
  .find()
  .limit(15)
  .exec()
  .then( seedResults =>{
    res.locals.seed = seedResults;
  })
  .then( () => {
  SeedModel
  .find()
  .limit(25)
  .sort()
  .exec()
  .then( sortedSeedResults => {
    res.locals.seedSorted = sortedSeedResults;
  })
  .then(() => {
    PortafolioModel
    .find()
    .limit(10)
    .exec()
    .then( portafolioSeedResults => {
      res.locals.portafolio = portafolioSeedResults;
      res.render("index");
  })
  .catch( err => {
    next( err );
  });
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
});

router.get("/myview", (req, res, next) => {
  res.render("admin-view/admin-view");
});


module.exports = router;
