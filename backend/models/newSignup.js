var mongoose = require('mongoose');

var NewSignupSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  ig_handle: {
    type: String,
    required: false
  },
  platform: {
    type: String,
    required: false
  },
  value_prop: {
    type: Number,
    required: true
  },
  joined: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('NewSignup', NewSignupSchema);
