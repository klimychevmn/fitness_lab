fitnessApp.controller('loginController', function ($scope, $http, $rootScope, $location) {


    $scope.login = function () {
        $rootScope.username = $scope.username;
        $rootScope.password = $scope.password;
        console.log("login");
        $rootScope.isLogin = true;
    }

    $http.get('/api/judges')
        .success(function (data) {
            $scope.judges = data;
            // console.log(data);
            $scope.login = function () {
                if ($scope.username == 'admin' && $scope.password == 'admin') {
                    $rootScope.isAdmin = true;
                    $rootScope.isLogin = true;
                    $rootScope.personName = 'Admin';
                    $rootScope.personRole = 'Admin';
                    console.log('admin');
                    $location.path('judge');
                } else {
                    for (var j = 0; j < $scope.judges.length; j++) {
                        if ($scope.username == $scope.judges[j].number && $scope.password == $scope.judges[j].password) {
                            $rootScope.isLogin = true;
                            $rootScope.isAdmin = false;
                            $rootScope.whichJudge = $scope.judges[j].number;
                            $rootScope.personName = $scope.judges[j].name;
                            // console.log($scope.judges[j]);
                            $rootScope.personRole = 'Judge';
                            console.log('login');
                            $location.path('home');
                            break;
                        } else {
                            $rootScope.isLogin = false;
                            $rootScope.isAdmin = false;
                            console.log('ne login');
                            $scope.warning = true;
                            continue;
                        }
                    }
                }
            }
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });
});