'use strict';

describe('Controller: ShopadminCtrl', function () {

  // load the controller's module
  beforeEach(module('kenwoodApp'));

  var ShopadminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShopadminCtrl = $controller('ShopadminCtrl', {
      $scope: scope
    });
  }));
});
