angular.module('sportsStore')
.filter('unique',function(){
	return function(data,propertyName){
		var results = [];
		var keys = {};
		angular.forEach(data,function(elem){
			var val = elem[propertyName];
			if(angular.isUndefined(keys[val])){
				keys[val] = true;
				results.push(val);
			}
		});
		return results;
	}
})
.filter('pageCount',function(){
	return function(data,size){
		if(angular.isArray(data)){
			var results = [];
			for(var i=0;i<Math.ceil(data.length/size);i++){
				results.push(i);
			}	
			return results;
		}else{
			return data;			
		}
	}
})
.filter('range',function($filter){
	return function(data,pageNumber,size){
		if(angular.isArray(data) && 
			angular.isNumber(pageNumber) && 
				angular.isNumber(size)){
			var startIndex = (pageNumber-1)*size;
			if(data.length < startIndex){
				return [];
			}else{
				return $filter("limitTo")(data.splice(startIndex),size);
			}
		}else{
			return data;
		}
	}
});