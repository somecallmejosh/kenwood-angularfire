'use strict';

/**
 * @ngdoc function
 * @name kenwoodApp.controller:ShopCtrl
 * @description
 * # ShopCtrl
 * Controller of the kenwoodApp
 */
angular.module('kenwoodApp')
  .controller('ShopCtrl', function ($scope, fbutil) {
    $scope.items = fbutil.syncArray('items', {limit: 12});
  });
