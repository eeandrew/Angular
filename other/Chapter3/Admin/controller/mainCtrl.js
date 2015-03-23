angular.module('adminMain')
.controller('mainCtrl',function($scope){
	$scope.screens = ['Products','Orders'];
	$scope.current = $scope.screens[0];

	$scope.setScreen = function(index){
		$scope.current = $scope.screens[index];
	}

	$scope.getScreen = function() {
		return $scope.current == 'Products' ? 
		'../Admin/views/adminProducts.html' : '../Admin/views/adminOrders.html'
	}

	$scope.getSelectedClass = function(screen) {
		if(screen == $scope.current){
			return 'btn-primary'
		}else{
			return '';
		}
	}
})