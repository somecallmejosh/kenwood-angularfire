'use strict';

/**
 * @ngdoc function
 * @name kenwoodApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kenwoodApp
 */
angular.module('kenwoodApp')
  .controller('AboutCtrl', function ($scope, $sce, $firebase) {
    var ref = new Firebase('https://kenwooddennard.firebaseio.com/about');
    var sync = $firebase(ref);
    var syncObject = sync.$asObject();
    syncObject.$bindTo($scope, 'content');

    $scope.init = function(){
      $scope.isNotEditable = 'isNotEditable';
    };
  });
