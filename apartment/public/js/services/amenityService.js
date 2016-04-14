angular.module('amenityService', [])

.factory('Amenity', function($http) {
  var amenityFactory = {};


  //get all apartments
  amenityFactory.all = function() {
    return $http.get('/api/amenities/');
  };

  //create an apartment
  amenityFactory.create = function(userData) {
    return $http.post('/api/amenities/', userData);
  };

  //delete an apartment
  amenityFactory.delete = function(id) {
    return $http.delete('/api/amenities/' + id);
  };

  return amenityFactory;


});
