'use strict';

/**
 * @ngdoc directive
 * @name kenwoodApp.directive:addItem
 * @description
 * # addItem
 */
angular.module('kenwoodApp')
  .directive('addItem', function () {
    return {
      template: '<p ng-show="!isNotEditable" class="pull-right">' +
      '<button class="btn btn-primary" ng-click="isNotEditable = !isNotEditable">Add an Item</button>' +
      '</p>' +
      '<p ng-show="isNotEditable" class="pull-right">' +
      '<button class="btn btn-primary" ng-click="isNotEditable = !isNotEditable">Done Adding Items</button>' +
      '</p>',
      restrict: 'E',
    };
  });
