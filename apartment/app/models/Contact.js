var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//contacts Schema
var ContactSchema = new Schema({
  number: String,
  address: String,
  email: String,
  emergencyNumber: String,
  officeHours: [String]
});

ContactSchema.pre('save', function(next) {
  var contact = this;
  next();
});

module.exports = mongoose.model('Contact', ContactSchema);
