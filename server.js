// DEPENDENCIES ====================================
const express = require('express');
const mongoose = require('mongoose');
const SolarProspect = require('./models/solarProspectModel.js')

// CONFIGURATION ===================================
const PORT = 8080;
const app = express();
app.use(express.static('client'));
mongoose.connect('mongodb://localhost/solarbase');

// ROUTING ========================================
app.route('/')
  .get((req, res) => {
    res.sendFile(`${__dirname}/client/views/index.html`);
  });

app.post('/api/prospects', (req, res) => {
  const newSolarProspect = new SolarProspect({
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    reasons: req.body.reasons
  });
  newSolarProspect.save(err => {
    if (err) {
      console.log(err);
    }
  });
});
// START SERVER ==================================
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
