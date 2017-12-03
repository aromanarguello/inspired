const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const portafolioSchema = new Schema({
  name: String,
  url: String,
  description: String,
  img: String
});

const PortafolioModel = mongoose.model("Portafolio", portafolioSchema);
module.exports = PortafolioModel;
