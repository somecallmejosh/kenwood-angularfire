'use strict';

/**
 * @ngdoc function
 * @name kenwoodApp.controller:ShopadminCtrl
 * @description
 * # ShopadminCtrl
 * Controller of the kenwoodApp
 */
angular.module('kenwoodApp')
  .controller('ShopadminCtrl', function ($scope, fbutil, $timeout) {
    $scope.items = fbutil.syncArray('items', {limit: 12});
    $scope.items.$loaded().catch(alert);
    // provide a method for adding a message

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
