var scotchApp = angular.module('scotchApp', []);

// создадим контроллер и внедрим $scope
scotchApp.controller('mainController', function($scope) {

    // сообщение, которое мы хотим отобразить
    $scope.message = 'Everyone come and see how good I look!';
});
var fitnessApp = angular.module('fitnessApp', ['ngRoute']);
fitnessApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller : 'mainController'
        })
        .when('/login', {
            templateUrl : 'pages/login.html',
            controller : 'loginController'
        })
        .when('/category', {
            templateUrl : 'pages/category.html',
            controller : 'categoryController'
        })
        .when('/competitors', {
            templateUrl : 'pages/competitors.html',
            controller : 'competitorsController'
        });
});

fitnessApp.controller('mainController', function($scope) {
    $scope.message = 'Home page';
});
fitnessApp.controller('loginController', function($scope) {
    $scope.message = 'Login page';
});
fitnessApp.controller('categoryController', function($scope) {
    $scope.message = 'Category page';
});
fitnessApp.controller('competitorsController', function($scope) {
    $scope.message = 'Competitors page';
});