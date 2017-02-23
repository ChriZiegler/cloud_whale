myStore.controller("myStoreController", function($http){
  vm = this;
  vm.products = []; //temporarily bind products to avoid error
  $http.get("data/products.json").then(
    function(response){
      vm.products = response.data;
    }, function(error){
      vm.error = error;
    }
  )
})
