var mongoose = require('mongoose');
var NewSignup = mongoose.model('NewSignup');


module.exports.signup = function(req, res) {
  var userInfo = {
    email: req.body.email,
    name: req.body.name,
    ig_handle: req.body.ig_handle,
    platform: req.body.platform,
    value_prop: req.body.value_prop
  };

  var newSignup = new NewSignup(userInfo);

  newSignup.save(function (err, user) {
    if (err) {
      console.log(err);
      res.status(400).send();
      return;
    } else if (user === null) {
      console.log('User is NULL');
      res.status(400).send();
      return;
    }

    res.status(200).send();
    return;
  });
}
