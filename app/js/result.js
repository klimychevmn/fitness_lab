routerApp.controller('resultController', function ($q, $scope, $http) {

    $scope.formData = {};

    $http.get('/api/competitors')
        .then(function (response) {
            $scope.competitors = response.data;
            console.log(response.data);
        });

    $http.get('/api/categories')
        .success(function (data) {
            $scope.categories = data;
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });


    $scope.save = function (competitor) {
        for (var i = 0; i < competitor.length; i++) {
            // console.log(i);
            $scope.formData.index = i + 1;
            $http.put('/api/competitors/' + competitor[i]._id, angular.copy($scope.formData))
                .success(function (data) {
                    $scope.competitors = data;
                    // console.log('success ' + data);
                })
                .error(function (data) {
                    console.log('error ' + data);
                })
        }
        console.log(competitor);
    };

    $scope.sort = function (competitor) {
        for (var i = 0; i < competitor.length; i++) {

        }
    };


});