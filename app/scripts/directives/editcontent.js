'use strict';

/**
 * @ngdoc directive
 * @name kenwoodApp.directive:editContent
 * @description
 * # editContent
 */
angular.module('kenwoodApp')
  .directive('editContent', function () {
    return {
      template: '<div class="edit-content clearfix" ng-show-auth>'  +
          '<div class="col-sm-12 alert alert-info" style="margin-bottom: 0">' +
            '<p ng-show="!isNotEditable" class="text-center">' +
              '<button class="btn btn-success" ng-click="isNotEditable = !isNotEditable">Edit Images/Videos On This Page</button>' +
            '</p>' +
            '<p ng-show="isNotEditable" class="text-center">' +
              '<button class="btn btn-success" ng-click="isNotEditable = !isNotEditable">Done Editing</button>' +
            '</p>' +
          '</div>' +
        '</div>',
      restrict: 'E'
    };
  });
