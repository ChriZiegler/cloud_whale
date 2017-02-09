myStore.controller("myStoreController", function($http){
  vm = this
  vm.products = $http.get("/data/products.json").then(
    function(response){
      vm.products = response.data;
    }, function(error){
      vm.error = error;
    }
  )
})
