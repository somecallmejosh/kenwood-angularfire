'use strict';

/**
 * @ngdoc function
 * @name kenwoodApp.controller:VideoadminCtrl
 * @description
 * # VideoadminCtrl
 * Controller of the kenwoodApp
 */
angular.module('kenwoodApp')
  .controller('VideoadminCtrl', function ($scope, $sce, fbutil, $timeout) {
    $scope.items = fbutil.syncArray('vids', {limit: 12});
    $scope.items.$loaded().catch(alert);
    // provide a method for adding a message

    $scope.vidCount = $scope.items.length;
    $scope.noVidsMessage = function(){
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
