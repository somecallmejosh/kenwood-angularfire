'use strict';

describe('Controller: ScheduledisplayCtrl', function () {

  // load the controller's module
  beforeEach(module('kenwoodApp'));

  var ScheduledisplayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScheduledisplayCtrl = $controller('ScheduledisplayCtrl', {
      $scope: scope
    });
  }));
});
