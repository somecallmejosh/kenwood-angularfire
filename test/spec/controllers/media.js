'use strict';

describe('Controller: MediaCtrl', function () {

  // load the controller's module
  beforeEach(module('kenwoodApp'));

  var MediaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MediaCtrl = $controller('MediaCtrl', {
      $scope: scope
    });
  }));
});
