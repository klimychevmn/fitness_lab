fitnessApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/home');
	var flag = true;
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'homeController'
		})
		.state('category', {
			url: '/category',
			templateUrl: 'views/category.html',
			controller: 'categoryController',
			resolve: {
				security: ['$q', '$rootScope', function ($q, $rootScope) {
					if (!$rootScope.isLogin) {
						return $q.reject('Not authorized');
					}
				}]
			}
		})
		.state('competitor', {
			url: '/competitor',
			templateUrl: 'views/competitor.html',
			controller: 'competitorController',
			resolve: {
				security: ['$q', '$rootScope', function ($q, $rootScope) {
					if (!$rootScope.isLogin) {
						return $q.reject('Not authorized');
					}
				}]
			}
		})
		.state('judge', {
			url: '/judge',
			templateUrl: 'views/judge.html',
			controller: 'judgeController',
			resolve: {
				security: ['$q', '$rootScope', function ($q, $rootScope) {
					if (!$rootScope.isAdmin) {
						return $q.reject('Not authorized');
					}
				}]
			}
		})
		.state('login', {
			url: '/login',
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})
		.state('result', {
			url: '/result',
			templateUrl: 'views/result.html',
			resolve: {
				security: ['$q', '$rootScope', function ($q, $rootScope) {
					if (!$rootScope.isLogin) {
						return $q.reject('Not authorized');
					}
				}]
			}
		})
		.state('protocol', {
			url: '/protocol',
			templateUrl: 'views/protocol.html',
			controller: 'protocolController',
			resolve: {
				security: ['$q', '$rootScope', function ($q, $rootScope) {
					if (!$rootScope.isLogin) {
						return $q.reject('Not authorized');
					}
				}]
			}
		})
		.state('logout', {
			url: '/logout',
			templateUrl: 'views/logout.html',
			controller: 'logoutController'
		})
		.state('profile', {
			url: '/profile',
			templateUrl: 'views/profile.html',
			controller: 'loginController',
			resolve: {
				security: ['$q', '$rootScope', function ($q, $rootScope) {
					if (!$rootScope.isLogin) {
						return $q.reject('Not authorized');
					}
				}]
			}
		});

});

