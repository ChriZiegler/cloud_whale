var productDisplayModule = angular.module('productDisplayModule',[])

productDisplayModule.directive('topproducts', function(){
  return {
    restrict: "A", // Allows you to call this directive by name as an attribute of a div
    templateUrl: "templates/topproducts.html",
  }
})
productDisplayModule.directive('allproducts', function(){
  return {
    restrict: "A", // Allows you to call this directive by name as an attribute of a div
    templateUrl: "templates/allproducts.html",
  }
})
