angular.module("adminMain")
.controller('authCtrl',function($scope,$http,$location,authUrl){
	$scope.authenticate = function(username,password){
		$http.post(authUrl,{
			username:username,
			password:password
		},{
			withCredentials: true
		}).success(function(data){
			$location.path('/main')
		}).error(function(err){
			$scope.authenticateError = err
		})
	}
})