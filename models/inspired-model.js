const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const seedSchema = new Schema ({
  company:  String,
  drugName: String
});

const SeedModel = mongoose.model("Seed", seedSchema);

module.exports = SeedModel;
