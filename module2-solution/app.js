(function(){
    
    var ShoppingListCheckOff=angular.module("ShoppingListCheckOff",[]);
    ShoppingListCheckOff.controller("ToBuyController",ToBuyController);
    ShoppingListCheckOff.controller("AlreadyBoughtController",AlreadyBoughtController);
    ShoppingListCheckOff.service("ShoppingListCheckOffService",ShoppingListCheckOffService);
    
    ToBuyController.$inject=['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    
    function ToBuyController(ShoppingListCheckOffService){
        var ToBuy=this;
        
        ToBuy.toBuyItems=ShoppingListCheckOffService.getToBuy();
        
        ToBuy.remove=function(index,name,qtty){
            ShoppingListCheckOffService.remove(index,name,qtty);
        }
        
    }
    
    function AlreadyBoughtController(ShoppingListCheckOffService){
        
        var alreadyBought=this;
        
        alreadyBought.alreadyBoughtItems=ShoppingListCheckOffService.getAlreadyBought();       
    }
    
    function ShoppingListCheckOffService(){
        
        var service=this;
        
        var alreadyBoughtItems=[];
        
        var toBuyItems=[
            { name: "cookies", quantity: 10 },
            { name: "milk", quantity: 2 },
            { name: "sweets", quantity: 5 },
            { name: "apple", quantity: 10 },
            { name: "chocolates", quantity: 6 }            
        ]
        
        service.getToBuy=function(){
            return toBuyItems;
        }
        
        service.getAlreadyBought=function(){
            return alreadyBoughtItems;
        }
        
        service.remove=function(index,name,qtty){
            toBuyItems.splice(index,1);
            alreadyBoughtItems.push({name:name,quantity:qtty});
        }
        
    }
    
    
})();