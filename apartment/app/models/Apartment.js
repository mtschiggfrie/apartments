var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//apartment Schema
var ApartmentSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  details: [String],
  sqfeet: String,
  image: String
});

ApartmentSchema.pre('save', function(next) {
  var apartment = this;
  next();
});

module.exports = mongoose.model('Apartment', ApartmentSchema);
