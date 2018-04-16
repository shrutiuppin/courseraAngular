(function () {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'UserService'];
  function SignUpController(MenuService, UserService) {
    var suCtrl = this;
    suCtrl.menuInvalid = false;
    suCtrl.saved = false;
    suCtrl.user = {};

    suCtrl.submit = function () {
      console.log("Submitting Request");
      MenuService.getMenuItem(suCtrl.user.menuShortName)
        .then(function (response) {
          if (!angular.equals(response, {})) {
            suCtrl.user.menuInvalid = false;
            UserService.setUserInfo(suCtrl.user);
            suCtrl.saved = true;
          }
          else {
            suCtrl.user.menuInvalid = true;
            suCtrl.saved = false;
          }
        })
        .catch(function (error) {
          console.log(error);
          suCtrl.user.menuInvalid = true;
          suCtrl.saved = false;
        });
    };
  }


})();
