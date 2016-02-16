'use strict';

/**
 * @ngdoc directive
 * @name kenwoodApp.directive:bannerImage
 * @description
 * # bannerImage
 */
angular.module('kenwoodApp')
  .directive('bannerImage', function () {
    return {
      template: '<div>' +
          '<img ng-src="{{content.banner_image}}" alt="" class="img-responsive">' +
          '<div class="well" ng-show="isNotEditable">' +
            '<label for="banner_image">Edit Banner Image (1700x582)</label>' +
            '<input type="text" ng-model="content.banner_image" class="form-control" id="banner_image">' +
          '</div>' +
        '</div>',
      restrict: 'E'
    };
  });
