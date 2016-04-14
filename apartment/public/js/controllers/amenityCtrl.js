angular.module('amenityCtrl', [])

  .controller('amenityController', function($scope, Amenity) {

    $scope.title = 'These are our amenities';

    Amenity.all()
      .success(function(data) {
        $scope.amenities = data;
      });


      $scope.saveAmenity = function() {
        Amenity.create($scope.amenityData)
          .then(function(data) {
            Amenity.all()
              .success(function(data) {
                $scope.amenities = data;
              })
          })
      }

      $scope.deleteAmenity = function(id) {
          Amenity.delete(id)
            .success(function(data) {
              Amenity.all()
                .success(function(data) {
                  $scope.amenities = data;
                })
            })
      }


    })
