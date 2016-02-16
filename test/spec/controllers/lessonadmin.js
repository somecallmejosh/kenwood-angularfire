'use strict';

describe('Controller: LessonadminCtrl', function () {

  // load the controller's module
  beforeEach(module('kenwoodApp'));

  var LessonadminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LessonadminCtrl = $controller('LessonadminCtrl', {
      $scope: scope
    });
  }));

});
