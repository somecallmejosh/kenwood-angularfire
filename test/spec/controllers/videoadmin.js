'use strict';

describe('Controller: VideoadminCtrl', function () {

  // load the controller's module
  beforeEach(module('kenwoodApp'));

  var VideoadminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideoadminCtrl = $controller('VideoadminCtrl', {
      $scope: scope
    });
  }));
});
