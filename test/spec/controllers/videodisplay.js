'use strict';

describe('Controller: VideodisplayCtrl', function () {

  // load the controller's module
  beforeEach(module('kenwoodApp'));

  var VideodisplayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideodisplayCtrl = $controller('VideodisplayCtrl', {
      $scope: scope
    });
  }));
});
