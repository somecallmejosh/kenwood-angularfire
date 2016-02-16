'use strict';

/**
 * @ngdoc function
 * @name kenwoodApp.controller:LessonsCtrl
 * @description
 * # LessonsCtrl
 * Controller of the kenwoodApp
 */
angular.module('kenwoodApp')
  .controller('LessonDetailCtrl', function ($scope, $http, fbutil, $routeParams) {
    $scope.items = fbutil.syncArray('lessons');
    $scope.whichItem = $routeParams.itemId;
  });
