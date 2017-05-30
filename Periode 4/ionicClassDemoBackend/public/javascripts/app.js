var TIMER_VALUE = 5000;

angular.module("projects",[])
  .controller('projectCtrl', function ($http, $scope, $timeout) {

    $timeout(getProjects,0);

    function getProjects () {
      console.log("XXXXXXXXXXXXXX");
      $http({
        method: 'GET',
        url: 'api/projects'
      }).then(function successCallback(res) {
        $scope.projects = res.data;
        $timeout(getProjects,TIMER_VALUE);
      }, function errorCallback(res) {
        $scope.error = res.status + ": " + res.data.statusText;
      });
    }

  });