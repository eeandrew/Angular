angular.module('sportsStore')
.controller('productListCtrl',function($scope,productListActiveClass,productListPageCount){

	var selectedCategory = null;
	$scope.selectCategory = function(category){
		selectedCategory = category;
		$scope.selectedPage = 1;
	}

	$scope.hasError = function(){
		return $scope.data.error !== null;
	}

	$scope.categoryFilterFn = function(product){
		return selectedCategory == null || selectedCategory == product.category;
	}

	$scope.getSelectedClass = function(category){
		return selectedCategory == category ? productListActiveClass : "";
	}

	$scope.selectedPage = 1;
	$scope.pageSize = productListPageCount;

	$scope.selectPage = function(newPage){
		$scope.selectedPage = newPage;
	}

	$scope.getPageClass = function(pageNumber){
		return $scope.selectedPage == pageNumber ? productListActiveClass : "";
	}

});