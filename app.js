var myStore = angular.module('myStore',['productDisplayModule','headerFooterModule','ui.bootstrap','ui.bootstrap.modal'])

window.onload = function() {
  setHeight($('.leftdiv'), $('.rightdiv'))


};

$(window).resize(function(){  setHeight($('.leftdiv'), $('.rightdiv'))})

// sets height of element 1 to equal the height of element 2
function setHeight(elem1, elem2) {
  var height = elem2.height()
  elem1.css('height', height);
}
