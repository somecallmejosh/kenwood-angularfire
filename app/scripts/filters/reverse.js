'use strict';

angular.module('kenwoodApp')
  .filter('reverse', function() {
    return function(items) {
      return angular.isArray(items)? items.slice().reverse() : [];
    };
  });
