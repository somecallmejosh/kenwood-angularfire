'use strict';

/**
 * @ngdoc filter
 * @name kenwoodApp.filter:unsafe
 * @function
 * @description
 * # unsafe
 * Filter in the kenwoodApp.
 */
angular.module('kenwoodApp')
  .filter('unsafe', function ($sce) {
    return $sce.trustAsHtml;

    // use as
    // <div ng-bind-html="item.thing | unsafe"></div>
});
