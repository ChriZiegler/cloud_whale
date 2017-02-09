var productDisplayModule = angular.module('productDisplayModule',[])

productDisplayModule.directive('productdisplay', function(){
  return {
    restrict: "A", // Allows you to call this directive by name as an attribute of a div
    templateUrl: "templates/productdisplay.html",
  }
})
