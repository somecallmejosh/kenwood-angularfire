'use strict';

describe('Controller: ImagedisplayCtrl', function () {

  // load the controller's module
  beforeEach(module('kenwoodApp'));

  var ImagedisplayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImagedisplayCtrl = $controller('ImagedisplayCtrl', {
      $scope: scope
    });
  }));

});
