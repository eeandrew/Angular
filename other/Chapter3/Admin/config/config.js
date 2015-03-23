angular.module('adminMain')
.config(function($routeProvider){

	$routeProvider.when('/login',{
		templateUrl : "views/login.html"
	})

	$routeProvider.when('/main',{
		templateUrl : "views/main.html"
	})

	$routeProvider.otherwise({
		redirectTo : "/login"
	})
})