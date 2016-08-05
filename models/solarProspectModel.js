var mongoose = require('mongoose');

// Create Schema and Model
var solarProspectSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
  city: String,
  state: String,
  zip: String,
  reasons: String
});

var SolarProspect = mongoose.model('solarProspect', solarProspectSchema);

module.exports = SolarProspect;
