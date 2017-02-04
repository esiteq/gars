angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('globalAnimalRescueSystem', {
    url: '/home',
    templateUrl: 'templates/globalAnimalRescueSystem.html',
    controller: 'globalAnimalRescueSystemCtrl'
  })

  .state('emergencyRescue', {
    url: '/emergency',
    templateUrl: 'templates/emergencyRescue.html',
    controller: 'emergencyRescueCtrl'
  })

  .state('searchForClinic', {
    url: '/vets',
    templateUrl: 'templates/searchForClinic.html',
    controller: 'searchForClinicCtrl'
  })

  .state('page4', {
    url: '/signup',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('page5', {
    url: '/address',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

$urlRouterProvider.otherwise('/home')

  

});