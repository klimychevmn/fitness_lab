fitnessApp.controller('logoutController', function ($scope, $http, $rootScope, $location) {
    $scope.logout = function() {
        $rootScope.isAdmin = false;
        $rootScope.isLogin = false;
        $location.path('home');
    };
});