myStore.controller('modalController', function($uibModal, $log, $document){
  var $ctrl = this;
  $ctrl.items = ['item1','item2'];
  $ctrl.open = function(size, product){
    var modalInstance = $uibModal.open({
      animation: false,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl:'templates/productmodal.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size:size,
      resolve: {
        items: function(){
          return $ctrl.items;
        },
        modalproduct: function(){
          return product;
        }
      }
    });
    modalInstance.result.then(function(selectedItem){
      $ctrl.selected = selectedItem;
    },function(){
    });
  };
})

myStore.controller('ModalInstanceCtrl', function($uibModalInstance,items, modalproduct){
  var $ctrl = this;
  $ctrl.modalproduct = modalproduct;
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
      $ctrl.modalproduct = $ctrl.resolve.modalproduct;
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
