// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova','position','dataservice']);

app.constant("FRIENDS_URL","http://ionicboth-plaul.rhcloud.com/api/friends/register/");

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

//app.config(function ($stateProvider, $urlRouterProvider) {
//
//  $stateProvider
//    .state('map', {
//      url: '/',
//      templateUrl: 'templates/map.html',
//      controller: 'MapCtrl'
//    });
//
//  $urlRouterProvider.otherwise("/");
//
//})

app.controller('MapCtrl', function ($scope, $state, $ionicLoading, $ionicPlatform, $ionicModal, locationService,dataService) {
  var options = {timeout: 10000, enableHighAccuracy: true};

  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function () {
    //if($cordovaVibration) { $cordovaVibration.vibrate(1000);}
    $scope.modal.show();
  };
  $scope.closeModal = function () {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function () {
    $scope.modal.remove();
  });

  $scope.user = {};
  $scope.registerUser = dataService.registerUser;

  $scope.$on('friendsReady', function (event, data) {
     $scope.friends = data.friends; // Not used, but contains an array with all friendss
  });

  $ionicPlatform.ready(function () {

    $ionicLoading.show({
      template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
    });
    locationService.getCurrentLocation(); //Spinner is closed inside here

    $scope.$on('locationEvent', function (event, data) {
      $scope.latLng = data.position;
      $scope.map = data.map;
    });
  });
});
