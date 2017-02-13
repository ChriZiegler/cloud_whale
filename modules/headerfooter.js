var headerFooterModule = angular.module('headerFooterModule',[])

headerFooterModule.directive('siteheader', function(){
  return {
    restrict: "A", // Allows you to call this directive by name as an attribute of a div
    templateUrl: "templates/site_header.html",
  }
})
