'use strict';

/**
 * @ngdoc function
 * @name kenwoodApp.controller:ImageadminCtrl
 * @description
 * # ImageadminCtrl
 * Controller of the kenwoodApp
 */
angular.module('kenwoodApp')
  .controller('ImageadminCtrl', function ($scope, $sce, fbutil, $timeout) {
    $scope.items = fbutil.syncArray('pics', {limit: 12});
    $scope.items.$loaded().catch(alert);
    // provide a method for adding a message

    $scope.picsCount = $scope.items.length;
    $scope.noPicsMessage = function(){
      if($scope.items.length < 1) {
        return true;
      }
    };

    $scope.init = function(){
      $scope.isNotEditable = 'isNotEditable';
      $scope.editItem = 'editItem';
      $scope.deleteItem = 'deleteItem';
    };

    $scope.addItem = function(newItem) {
      if(newItem) {
        // push a message to the end of the array
        $scope.items.$add(newItem)
        // display any errors
        .catch(alert);
      }
    };

    $scope.removeItem = function(id) {
      $scope.items.$remove(id);
    };

    $scope.updateItem = function(id) {
      $scope.items.$save(id);
    };

    function alert(msg) {
      $scope.err = msg;
      $timeout(function() {
        $scope.err = null;
      }, 5000);
    }
  });
