(function () {
  "use strict";

  angular.
    module("MenuApp").
    controller("CategoryItemsController", CategoryItemsController);

  CategoryItemsController.$inject = ["categories"];
  function CategoryItemsController(categories) {
    var ctrl = this;
    ctrl.categories = categories;
  }

})();
