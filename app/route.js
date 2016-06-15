fitnessApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'homeController'
		})
		.state('category', {
			url: '/category',
			templateUrl: 'views/category.html',
			controller: 'categoryController'
		})
		.state('competitor', {
			url: '/competitor',
			templateUrl: 'views/competitor.html',
			controller: 'competitorController'
		})
		.state('judge', {
			url: '/judge',
			templateUrl: 'views/judge.html'
			// controller: 'judgeController'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})
		.state('result', {
			url: '/result',
			templateUrl: 'views/result.html'
		})
		.state('protocol', {
			url: '/protocol',
			templateUrl: 'views/protocol.html',
			controller: 'protocolController'
		});
});