var express = require('express');
var router = express.Router();

var user = require('./controllers/user.js');

// user
router.post('/signup', user.signup);
router.get('/justemail/:email/:value_prop', user.justEmail);

// 404 error
router.all('/*', function(req, res) {
  res.status(404).send();
  return;
});

module.exports = router;
