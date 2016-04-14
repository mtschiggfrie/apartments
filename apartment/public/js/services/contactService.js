angular.module('contactService', [])

.factory('Contact', function($http) {
  var contactFactory = {};


  //get all contacts
  contactFactory.all = function() {
    return $http.get('/api/contact/');
  };

  //create an contact
  contactFactory.create = function(userData) {
    return $http.post('/api/contact/', userData);
  };


  //delete an contact
  contactFactory.delete = function(id) {
    return $http.delete('/api/contact/' + id);
  };


  return contactFactory;


});
