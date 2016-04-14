angular.module('appRoutes', [])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

   $routeProvider

       // home page
       .when('/', {
           templateUrl: 'views/home.html',
           controller: 'mainController'
       })

       .when('/apartments', {
           templateUrl: 'views/apartments.html',
           controller: 'apartmentController'
       })

       .when('/apartments/create', {
            templateUrl: 'views/createEditApartment.html',
            controller: 'createApartmentController'
       })

       .when('/apartments/:apartment_id', {
            templateUrl: 'views/createEditApartment.html',
            controller: 'editAppartmentController'
       })

       .when('/apartments/view/:apartment_id', {
            templateUrl: 'views/viewApartment.html',
            controller: 'viewAppartmentController'
       })

       .when('/amenities', {
            templateUrl: 'views/amenities.html',
            controller: 'amenityController'
       })

       .when('/contact-us', {
            templateUrl: 'views/contact-us.html',
            controller: 'contactController'
       })

   $locationProvider.html5Mode(true);

}]);
