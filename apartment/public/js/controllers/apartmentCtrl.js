angular.module('apartmentCtrl', [])

  .controller('apartmentController', function($scope, Apartment) {

    Apartment.all()
      .success(function(data) {
        $scope.apartments = data;
      });

      $scope.deleteApartment = function(id) {
          Apartment.delete(id)
            .success(function(data) {
              Apartment.all()
                .success(function(data) {
                  $scope.apartments = data;
                })
            })
      }

})

  .controller('createApartmentController', function($scope, Apartment) {

    $scope.type = 'create';
    $scope.saveApartment = function() {
      $scope.add();
      Apartment.create($scope.apartmentData)
        .succes(function(data) {
          $scope.apartmentData = {};
        });
    };

    $scope.add = function(){
        var f = document.getElementById('file').files[0],
        r = new FileReader();
        r.onloadend = function(e){
        var data = e.target.result;
        //send you binary data via $http or $resource or do anything else with it
        $scope.data = 'data:image/jpeg;base64,' + btoa(e.target.result);
        $scope.apartmentData.image = $scope.data;
      }
    }
  })

  .controller('editAppartmentController', function($routeParams, $scope, Apartment) {
    $scope.type = 'edit';
    $scope.data = 'none';
    Apartment.get($routeParams.apartment_id)
      .success(function(data) {
        $scope.apartmentData = data;
      });

    $scope.saveApartment = function() {
      $scope.add();
      Apartment.update($routeParams.apartment_id, $scope.apartmentData)
        .success(function(data) {
          $scope.apartmentData = '';
        });
    };

    $scope.add = function(){
        var f = document.getElementById('file').files[0],
        r = new FileReader();
        r.onloadend = function(e){
        var data = e.target.result;
        //send you binary data via $http or $resource or do anything else with it
        $scope.data = 'data:image/jpeg;base64,' + btoa(e.target.result);
        $scope.apartmentData.image = $scope.data;
      }
    }

  })

  .controller('viewAppartmentController', function($routeParams, $scope, Apartment) {
    $scope.title = 'apartment';
    $scope.apartments = '';
    Apartment.viewGet($routeParams.apartment_id)
      .success(function(data) {
        $scope.apartments = data;
      });
    });
