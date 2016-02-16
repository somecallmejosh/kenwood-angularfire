'use strict';

/**
 * @ngdoc function
 * @name kenwoodApp.controller:ImagedisplayCtrl
 * @description
 * # ImagedisplayCtrl
 * Controller of the kenwoodApp
 */
angular.module('kenwoodApp')
  .controller('ImagedisplayCtrl', function ($scope, fbutil) {
    $scope.items = fbutil.syncArray('pics');
  });
