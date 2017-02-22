var filterModule = angular.module('filterModule',[])

filterModule.directive('filter', function(){
  return {
    restrict: "A", // Allows you to call this directive by name as an attribute of a div
    templateUrl: "templates/filter.html",
  }
})
