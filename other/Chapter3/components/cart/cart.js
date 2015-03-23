angular.module('cart',[])
.factory('cart',function(){
	var cartData = [];
	return {
		addProduct:function(id,name,price){
			for(var i=0;i<cartData.length;i++){
				if(cartData[i].id === id){
					cartData[i].count++;
					return;
				}
			}
			cartData.push({
				id:id,name:name,price:price,count:1
			});
		},
		removeProduct:function(id){
			for (var i = 0; i < cartData.length; i++) {
				if(cartData[i].id === id){
					cartData.splice(i,1);
					break;
				}
			};
		},
		getProducts:function(){
			return cartData;
		}
	};
});