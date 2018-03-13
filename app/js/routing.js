var app = angular.module("app", ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'components/home.html',
		controller: 'homeCtrl',
		controllerAs: 'home'
	});
	$routeProvider.when('/man', {
		templateUrl: 'components/man.html',
		controller: 'manCtrl',
		controllerAs: 'man'
	});
	$routeProvider.when('/woman', {
		templateUrl: 'components/woman.html',
		controller: 'womanCtrl',
		controllerAs: 'woman'
	});
	$routeProvider.when('/accessories', {
		templateUrl: 'components/accessories.html',
		controller: 'accessoriesCtrl',
		controllerAs: 'accessories'
	});
	$routeProvider.when('/shoes', {
		templateUrl: 'components/shoes.html',
		controller: 'shoesCtrl',
		controllerAs: 'shoes'
	});
})
