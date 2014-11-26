'use strict';

/**
 * @ngdoc directive
 * @name kenwoodApp.directive:editItem
 * @description
 * # editItem
 */
angular.module('kenwoodApp')
  .directive('editItem', function () {
    return {
      template: '<div ng-show="!deleteItem" class="btn-group">' +
      '<button class="btn btn-sm btn-primary" ng-click="editItem = !editItem">Done Editing</button>' +
      '<button class="btn btn-sm btn-warning" ng-click="deleteItem = !deleteItem">Delete</button>' +
      '</div>' +
      '<div ng-show="deleteItem">' +
      '<p class="small">You sure you want to delete this?</p>' +
      '<div class="btn-group">' +
      '<button class="btn btn-sm btn-info" ng-click="deleteItem = !deleteItem">Don\'t Delete</button>' +
      '<button class="btn btn-sm btn-danger" ng-click="removeItem($index)">Yes, Delete This Item</button>' +
      '</div>' +
      '</div>',
      restrict: 'E'
    };
  });
