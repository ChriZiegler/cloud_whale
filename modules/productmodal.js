var productModal = angular.module('productModal');

productModal.directive('productModal',function(){
  return{
    restrict: "A",
    templateUrl: "templates/productmodal.html"
  }
})

productModal.controller('productModalController', ['close', function(close) {

  this.close = close;

}]);
