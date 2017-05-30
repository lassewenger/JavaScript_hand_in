angular.module('myModule', [])
        .controller('myController', ['$http', function ($http) {
                var self = this;
                self.jokeData;


                $http.get('http://localhost:8000/api/jokes')
                        .then(function (response) {
                            self.jokeData = response.data;
                        });

                self.getJoke = function (id) {
                    $http.get('http://localhost:8000/api/jokes/' + id)
                            .then(function (response) {
                                self.jokeById = response.data;
                            });
                };

                self.deleteJoke = function (id) {
                    $http.delete('http://localhost:8000/api/jokes' + id);
                };

                self.addJoke = function (joke) {
                    $http.post('http://localhost:8000/jokes', joke)
                            .then(function (joke) {
                                console.log('success: ' + joke);
                            })
                            .error(function (joke) {
                                console.log('Error: ' + joke);
                            });



                };
            }]);


