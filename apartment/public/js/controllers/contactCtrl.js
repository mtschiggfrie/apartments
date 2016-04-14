angular.module('contactCtrl', [])

  .controller('contactController', function($scope, Contact) {

    $scope.title = 'These are our contacts';

    Contact.all()
      .success(function(data) {
        $scope.contacts = data;
      });


      $scope.saveContact = function() {
        Contact.create($scope.contactData)
          .then(function(data) {
            Contact.all()
              .success(function(data) {
                $scope.contacts = data;
              })
          })
      }

      $scope.deleteContact = function(id) {
          Contact.delete(id)
            .success(function(data) {
              Contact.all()
                .success(function(data) {
                  $scope.contacts = data;
                })
            })
      }



  });
