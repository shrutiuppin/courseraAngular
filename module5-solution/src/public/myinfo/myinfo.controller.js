(function () {
  "use strict";

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MenuService', 'UserService'];
  function MyInfoController(MenuService, UserService) {
    var infoCtrl = this;

    var userInfo = UserService.getUserInfo();
    infoCtrl.userInfo = userInfo;
    if (userInfo && !angular.equals(UserService.getUserInfo(), {}))
    {
      MenuService.getMenuItem(userInfo.menuShortName)
        .then(function (response) {
          infoCtrl.menuItem = response;
        })
        .catch(function (err) {
          console.log(err);
          alert("Menu Item service is not reachable.")
        });
    }
    else {
      infoCtrl.notSignedUp = true;
    }
  }
})();
