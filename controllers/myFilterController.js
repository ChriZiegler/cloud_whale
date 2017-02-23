filterModule.controller("myFilterController", function($scope, $filter){
  ths = this
  $scope.types={};
  $scope.prices={}
  $scope.searchterm = ""
  $scope.setSearchTerm = function(text){
    $scope.searchterm = text
  }

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
      if(item.tags.includes(type)){
        contains = true
      }
    })
    return contains
  }
}

priceMatch = function(item, prices){
  matches = false
  myprices = filterObject(prices)
  if(myprices.length===0){
    return true
  }else{
    angular.forEach(myprices, function(price){
      if(price=="lessthan10" && item.price <=10){
        matches = true
      }
      if(price=="tento20" && item.price >10 && item.price<=20){
        matches = true
      }
      if(price=="twentyto40" && item.price >20 && item.price<=40){
        matches = true
      }
      if(price=="fortyto60" && item.price >40 && item.price<=60){
        matches = true
      }
      if(price=="greaterhtan60" && item.price >= 60){
        matches = true
      }
    })
  }
  return matches
}

filterModule.filter('myfilter',function(){
  return function(items,types,prices){
    var filtered_1=[];
    var filtered_2=[];

    angular.forEach(items,function(item){
      if(searchItem(item,types) === true){
        filtered_1.push(item)
      }
    });
    angular.forEach(filtered_1,function(item){
      if(priceMatch(item,prices)===true){
        filtered_2.push(item)
      }
    })
    return filtered_2
  };
});
