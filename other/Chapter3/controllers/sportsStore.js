angular.module('sportsStore')
.controller('sportsStoreCtrl',function($scope,$http,dataUrl){
	$scope.data = {};
	$http.get(dataUrl).success(function(data){
		$scope.data.products = data;
	}).error(function(err){
		$scope.data.error = err;
	})
});