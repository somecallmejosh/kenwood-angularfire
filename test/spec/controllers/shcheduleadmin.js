'use strict';

describe('Controller: ShcheduleadminCtrl', function () {

  // load the controller's module
  beforeEach(module('kenwoodApp'));

  var ShcheduleadminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShcheduleadminCtrl = $controller('ShcheduleadminCtrl', {
      $scope: scope
    });
  }));
});
