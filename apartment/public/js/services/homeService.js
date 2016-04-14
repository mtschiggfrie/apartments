angular.module('homeService', [])

.factory('Home', function($http) {
  var homeFactory = {};


  //get all homes
  homeFactory.all = function() {
    return $http.get('/api/home');
  };

  //create an home
  homeFactory.create = function(userData) {
    return $http.post('/api/home', userData);
  };

  //delete an home
  homeFactory.delete = function(id) {
    return $http.delete('/api/home/' + id);
  };


  return homeFactory;


});
