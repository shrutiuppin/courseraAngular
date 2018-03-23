(function(){
    "use strict";
    var LunchCheck=angular.module("LunchCheck",[]);
   
    LunchCheck.controller("lunchCheckController",lunchCheckController);

    lunchCheckController.$inject = ['$scope'];

    function lunchCheckController($scope){
        $scope.check=function(){
            var errorMsg="";
            var cssClass="";
            if($scope.items==undefined){
                errorMsg="Please enter data first";
                cssClass="red";     
            }
            else{
                 var itemsArray=[]; 
                 var items=$scope.items.split(",");
                 var itemLength=items.length;
                 for (var i = 0; i < itemLength; i++) {
                    if (items[i]) {
                        itemsArray.push(items[i]);
                    }
                  }
               
                var arraylen=itemsArray.length;
                cssClass="green";
                if(arraylen<=3){
                    errorMsg="Enjoy!";  
                }else if(arraylen>3){
                    errorMsg="Too much!"
                }
            }
           
            $scope.errorMsg=errorMsg; 
            $scope.cssClass=cssClass;
            $scope.items=undefined;   
        }  
    }
})();