'use strict';

describe('Controller: SiteadminCtrl', function () {

  // load the controller's module
  beforeEach(module('kenwoodApp'));

  var SiteadminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SiteadminCtrl = $controller('SiteadminCtrl', {
      $scope: scope
    });
  }));
});
