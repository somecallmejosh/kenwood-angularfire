'use strict';

describe('Controller: SiteconstantsCtrl', function () {

  // load the controller's module
  beforeEach(module('kenwoodApp'));

  var SiteconstantsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SiteconstantsCtrl = $controller('SiteconstantsCtrl', {
      $scope: scope
    });
  }));
});
