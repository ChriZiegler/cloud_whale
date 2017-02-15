filterModule.controller("myFilterController", function($scope, $filter){
  ths = this
  $scope.types={'plush':false, 'pokemon':false};


})

filterObject = function(obj){
  var filteredObj = Object.keys(obj).reduce(function(p, c) {
  if (obj[c]) p[c] = obj[c];
  return p;
  }, {});
  return Object.keys(filteredObj)
}

searchItem = function(item, types){
  contains = false
  mytypes = filterObject(types)
  if(mytypes.length === 0){
    return true
  }else{
    angular.forEach(mytypes,function(type){
      console.log(item.tags)
      console.log(type)
      console.log(item.tags.includes(type))
      if(item.tags.includes(type)){
        contains = true
      }
    })
    return contains
  }
}

filterModule.filter('myfilter',function(){
  return function(items,types){
    var filtered=[];

    angular.forEach(items,function(item){
      console.log(searchItem(item, types))
      if(searchItem(item,types) === true){
        filtered.push(item)
      }
    });
    return filtered
  };
});
