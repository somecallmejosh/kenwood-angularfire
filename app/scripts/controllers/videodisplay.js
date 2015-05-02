'use strict';

/**
 * @ngdoc function
 * @name kenwoodApp.controller:VideodisplayCtrl
 * @description
 * # VideodisplayCtrl
 * Controller of the kenwoodApp
 */
angular.module('kenwoodApp')
  .controller('VideodisplayCtrl', function ($scope, fbutil) {
    $scope.items = fbutil.syncArray('vids');
});
