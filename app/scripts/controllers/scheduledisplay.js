'use strict';

/**
 * @ngdoc function
 * @name kenwoodApp.controller:ScheduledisplayCtrl
 * @description
 * # ScheduledisplayCtrl
 * Controller of the kenwoodApp
 */
angular.module('kenwoodApp')
  .controller('ScheduledisplayCtrl', function ($scope, fbutil) {
  $scope.events = fbutil.syncArray('events');
  $scope.eventCount = $scope.events;
  $scope.noEventMessage = function(){
    if($scope.events.length < 1) {
      return true;
    }
  };
});
