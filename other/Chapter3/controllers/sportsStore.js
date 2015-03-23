angular.module('sportsStore')
.controller('sportsStoreCtrl',function($scope,$http,$location,cart,dataUrl,orderUrl){
	$scope.data = {}

	$http.get(dataUrl).success(function(data){
		$scope.data.products = data;
	}).error(function(err){
		$scope.data.error = err;
	})

	$scope.sendOrder = function(shippingDetails) {
		var order = angular.copy(shippingDetails);
		order.products = cart.getProducts();
		$http.post(orderUrl,order)
			.success(function(data){
				$scope.data.orderId = data.id;
				cart.getProducts().length = 0;
			})
			.error(function(error){
				$scope.data.orderError = error;
			})
			.finally(function(){
				$location.path("/complete")
			})
	}

});