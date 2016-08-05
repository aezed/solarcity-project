// DEPENDENCIES ====================================
const express = require('express');


// CONFIGURATION ===================================
const PORT = 8080;
const app = express();
app.use(express.static('client'));

// ROUTING ========================================
app.route('/')
  .get(function(req, res) {
    res.sendFile(`${__dirname}/client/views/index.html`);
  });

// START SERVER ==================================
app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}!`);
});
