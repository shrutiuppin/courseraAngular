(function () {
  "use strict";

  angular.module("MenuApp").
    component("items", {
      templateUrl: "js/components/items.html",
      bindings: {
        items: "<"
      }
    });

})();
