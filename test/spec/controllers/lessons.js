'use strict';

describe('Controller: LessonsCtrl', function () {

  // load the controller's module
  beforeEach(module('kenwoodApp'));

  var LessonsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LessonsCtrl = $controller('LessonsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
