(function () {
  "use strict";

  angular.module('common')
    .service('UserService', UserService);

  function UserService() {
    var service = this;
    var user = {};

    service.setUserInfo = function(value) {
      user = angular.copy(value);
    };

    service.getUserInfo = function() {
      return angular.copy(user);
    };

  }

})();
