'use strict';

describe('Controller: ImageadminCtrl', function () {

  // load the controller's module
  beforeEach(module('kenwoodApp'));

  var ImageadminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImageadminCtrl = $controller('ImageadminCtrl', {
      $scope: scope
    });
  }));

});
