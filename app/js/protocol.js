fitnessApp.controller('protocolController', function ($scope, $http) {

    $http.get('/api/categories')
        .success(function (data) {
            $scope.categories = data;
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });


    $http.get('/api/competitors')
        .success(function (data) {
            $scope.competitors = data;
            //console.log(data);
        })
        .error(function (data) {
            //console.log('Error: ' + data);
        });


});