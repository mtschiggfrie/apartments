var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//amenities Schema
var AmenitySchema = new Schema({
  amenity: String
});

AmenitySchema.pre('save', function(next) {
  var amenity = this;
  next();
});

module.exports = mongoose.model('Amenity', AmenitySchema);
