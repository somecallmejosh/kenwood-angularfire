'use strict';

/**
 * @ngdoc function
 * @name kenwoodApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the kenwoodApp
 */
angular.module('kenwoodApp')
  .controller('ScheduleCtrl', function ($scope, $sce, $firebase) {
  var ref = new Firebase('https://kenwooddennard.firebaseio.com/schedule');
  var sync = $firebase(ref);
  var syncObject = sync.$asObject();
  syncObject.$bindTo($scope, 'content');

  $scope.init = function(){
    $scope.isNotEditable = 'isNotEditable';
  };
});
