'use strict';

/**
 * @ngdoc function
 * @name kenwoodApp.controller:LessonsCtrl
 * @description
 * # LessonsCtrl
 * Controller of the kenwoodApp
 */
angular.module('kenwoodApp')
  .controller('LessonsCtrl', function ($scope, fbutil) {
    $scope.items = fbutil.syncArray('lessons', {limit: 12});
  });
