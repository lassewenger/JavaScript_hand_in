app = angular.module('dataservice', []);

app.factory("dataService", function ($http, $rootScope,locationService,FRIENDS_URL) {

  function registerUser(user, map,modal,latLng) {
    modal.hide()
    user.loc = {type: "Point", coordinates: []}; //GeoJSON point
    user.loc.coordinates.push(latLng.lng());
    user.loc.coordinates.push(latLng.lat());
    var distance = user.distance;
    $http({
      method: "POST",
      url: FRIENDS_URL + distance,
      data: user
    }).then(function ok(res) {
        console.log(res.data);
        var nearest = true;
        res.data.forEach(function (friend) {
          var friendLatLng = new google.maps.LatLng(friend.loc.coordinates[1], friend.loc.coordinates[0]);
          var iconColor = "red.png";
          if (nearest) {
            iconColor = "green.png";
            nearest = false;
          }
          var marker = new google.maps.Marker({
            position: friendLatLng,
            icon: new google.maps.MarkerImage("http://maps.google.com/mapfiles/ms/icons/" + iconColor),
            title: friend.userName
          });
          marker.setMap(map);
          var infowindow = new google.maps.InfoWindow({
            content: friend.userName
          });
          marker.addListener('click', function () {
            infowindow.open(map, marker);
          });
        })
        var circle = new google.maps.Circle({
          center: latLng,
          map: map,
          radius: distance * 1000,
          strokeColor: "red",
          strokeOpacity: 0.4,
          strokeWeight: 2,
          fillColor: "white"
        });
        $rootScope.$broadcast("friendsReady", {friends: res.data});
      },
      function err(res) {
        console.log(res.data);
      });
  }

  return {
    registerUser: registerUser
  }

});
