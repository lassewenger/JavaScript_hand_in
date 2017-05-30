app = angular.module('position', ['ngCordova']);

app.factory("locationService", function ($cordovaGeolocation,$ionicLoading,$rootScope,$window) {
  var latLng;

  function getLocation() {
    var posOptions = {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0
    };

    $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      console.log("Lat: " + lat);
      console.log("Long: " + long);

      latLng = new google.maps.LatLng(lat, long);

      var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };


      var map = new google.maps.Map(document.getElementById("map"), mapOptions);


      var icon = "http://maps.google.com/mapfiles/ms/icons/blue.png";
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: new google.maps.MarkerImage(icon),
        title: 'Me!'
      });
      var infowindow = new google.maps.InfoWindow({
        content: "Me!"
      });
      marker.addListener('click', function () {
        infowindow.open(map, marker);
      });

      $ionicLoading.hide();
      $rootScope.$broadcast("locationEvent",{map: map, position : latLng});

    }, function (error) {
      $ionicLoading.hide();
      console.log("Could not get location");
      $window.alert(error.message);
      e = error;

    });
  }
  var e;
  return {
    getCurrentLocation: getLocation
  }
});
