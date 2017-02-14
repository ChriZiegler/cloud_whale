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

myStore.controller('modalController', function($uibModal, $log, $document){
  var $ctrl = this;
  $ctrl.items = ['item1','item2'];
  $ctrl.open = function(size, parentSelector){
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo'+parentSelector)): undefined;
    var modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl:'templates/productmodal.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size:size,
      appendTo: parentElem,
      resolve: {
        items: function(){
          return $ctrl.items;
        }
      }
    });
    modalInstance.result.then(function(selectedItem){
      $ctrl.selected = selectedItem;
    },function(){
      $log.info('Modal dismissed at:' + new Date())
    });
  };
  $ctrl.openComponentModal = function(){
    var modalInstance = $uibModal.open({
      animation: true,
      component: 'modalComponent',
      resolve:{
        items: function(){
          return $ctrl.items;
        }
      }
    });
  }
})

myStore.controller('ModalInstanceCtrl', function($uibModalInstance,items){
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };
  $ctrl.ok = function(){
    $uibModalInstance.close($ctrl.selected.item)
  };
  $ctrl.cancel = function(){
    $uibModalInstance.dismiss('cancel')
  }
})

myStore.component('modalComponent',{
  templateUrl: 'templates/productmodal.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function(){
    var $ctrl = this;

    $ctrl.$onInit = function(){
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };
    $ctrl.ok = function(){
      $ctrl.close({$value: $ctrl.selected.item});
    };
    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});
