 productDisplayModule.controller("myPaginationController",function(){
   ths = this;
   ths.currentPage = 0;
   ths.pageSize = 4;
   ths.data = [];
   ths.numberOfPages = function(prods){
     return Math.ceil(prods.length/ths.pageSize);
   }
 })

productDisplayModule.filter("startFrom",function(){
  return function(input,start){
    start = +start; //parse to int
    return input.slice(start);

  }
})
