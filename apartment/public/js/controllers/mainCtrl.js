angular.module('mainCtrl', []).controller('mainController', function($scope, Home) {

    $scope.homeData = {};

    Home.all()
      .success(function(data) {
        $scope.homes = data;
      });


    $scope.add = function(){
      var f = document.getElementById('file').files[0],
          r = new FileReader();
          r.onloadend = function(e){
        var data = e.target.result;
        //send you binary data via $http or $resource or do anything else with it
        $scope.data = 'data:image/jpeg;base64,' + btoa(e.target.result);
        $scope.homeData.image = $scope.data;
        Home.create($scope.homeData)
          .then(function(data) {
            Home.all()
              .success(function(data) {
                $scope.homes = data;
              })
          })
      }
      r.readAsBinaryString(f);
    }



    $scope.saveHome = function() {
      Home.create($scope.homeData)
        .then(function(data) {
          Home.all()
            .success(function(data) {
              $scope.homes = data;
            })
        })
    }

    $scope.deleteHome = function(id) {
        Home.delete(id)
          .success(function(data) {
            Home.all()
              .success(function(data) {
                $scope.homes = data;
              })
          })
    }


});
