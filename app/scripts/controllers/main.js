'use strict';

/**
 * @ngdoc function
 * @name kenwoodApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kenwoodApp
 */
angular.module('kenwoodApp')
  .controller('MainCtrl', function ($scope, $sce, $firebase) {
    var ref = new Firebase('https://kenwooddennard.firebaseio.com/main');
    var sync = $firebase(ref);
    var syncObject = sync.$asObject();
    syncObject.$bindTo($scope, 'content');

    $scope.init = function(){
      $scope.isNotEditable = 'isNotEditable';
    };
  });
