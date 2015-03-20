var todoApp = angular.module('todoApp',[]);

var model = {
	user: "Adam"
};

todoApp.run(function($http){
	$http.get('../todo.json').success(function(todos){
		model.items = todos;
	})
});

todoApp.filter('checkedItems',function(){
	return function(items,showComplete){
		var resultAttr = [];
		angular.forEach(items,function(item){
			if(!item.done || showComplete){
				resultAttr.push(item);
			}
		});
		return resultAttr;
	}
});

todoApp.controller('ToDoCtrl',function($scope){
	$scope.todos = model;
	$scope.unfinishedTodos = function(){
		var count = 0;
		angular.forEach($scope.todos.items,function(item){
			if(!item.done){++count;}
		});
		return count;
	};
	$scope.hideTodos = function(){
		return $scope.unfinishedTodos() === 0;
	};
	$scope.warningLevel = function(){
		return $scope.unfinishedTodos() > 2 ? 'label-warning' : 'label-success';
	};
	$scope.addNewTodo = function(newTodo) {
		$scope.todos.items.push({action:newTodo,done:false});
	}
});