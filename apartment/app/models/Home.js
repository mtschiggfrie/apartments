var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//home Schema
var HomeSchema = new Schema({
  image: String
});

HomeSchema.pre('save', function(next) {
  var home = this;
  next();
});

module.exports = mongoose.model('Home', HomeSchema);
