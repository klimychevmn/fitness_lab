fitnessApp.controller('resultController', function ($scope, $rootScope, $http) {

    $scope.formData = {};

    $http.get('/api/competitors')
        .then(function (response) {
            $scope.competitors = response.data;
            // console.log(response.data);
        });

    $http.get('/api/categories')
        .success(function (data) {
            $scope.categories = data;
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });


    $http.get('/api/judges')
        .success(function (data) {
            $scope.judges = data;
            // console.log(data);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

    // $scope.save = function (cat, category, competitor) {
    //     for (var i = 0; i < competitor.length; i++) {
    //         console.log(i);
    //         $scope.formData.index = i + 1;
    //         $http.put('/api/competitors/' + competitor[i]._id, angular.copy($scope.formData))
    //             .success(function (data) {
    //                 $scope.competitors = data;
    //                 // console.log('success ' + data);
    //             })
    //             .error(function (data) {
    //                 console.log('error ' + data);
    //             })
    //     }
    // };

    $scope.save = function (competitor) {
        console.log(competitor);
        for (var i = 0; i < competitor.length; i++) {
            console.log(i);
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
    };
});