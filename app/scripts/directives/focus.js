'use strict';

/**
 * @ngdoc directive
 * @name kenwoodApp.directive:focus
 * @description
 * # focus
 */
angular.module('kenwoodApp')
  .directive('focus', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        element[0].focus();
      }
    };
  });
