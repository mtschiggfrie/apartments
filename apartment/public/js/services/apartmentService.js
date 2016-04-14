angular.module('apartmentService', [])

.factory('Apartment', function($http) {
  var apartmentFactory = {};

  //get a single apartment
  apartmentFactory.get = function(id) {
    return $http.get('/api/apartments/' + id);
  };

  //get a single apartment to view
  apartmentFactory.viewGet = function(id) {
    return $http.get('/api/apartments/view/' + id);
  };

  //get all apartments
  apartmentFactory.all = function() {
    return $http.get('/api/apartments/');
  };

  //create an apartment
  apartmentFactory.create = function(userData) {
    return $http.post('/api/apartments/', userData);
  };

  //update an apartment
  apartmentFactory.update = function(id, userData) {
    return $http.put('/api/apartments/' + id, userData);
  };

  //delete an apartment
  apartmentFactory.delete = function(id) {
    return $http.delete('/api/apartments/' + id);
  };


  return apartmentFactory;


});
