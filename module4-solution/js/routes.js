(function () {
  "use strict";

  angular.
    module("MenuApp").
    config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "js/home.html"
      })
      .state("categories", {
        url: "/categories",
        templateUrl: "js/components/categories_items.html",
        controller: "CategoryItemsController as catCtrl",
        resolve: {
          categories: ["MenuDataService", function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state("items", {
        url: "/categories/{categoryShortName}/items",
        templateUrl: "js/components/menu_items.html",
        controller: "MenuItemsController as menuCtrl",
        resolve: {
          items: ["MenuDataService", "$stateParams", function (MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      });
  }
})();
