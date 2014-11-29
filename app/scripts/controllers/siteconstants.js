'use strict';

/**
 * @ngdoc function
 * @name kenwoodApp.controller:SiteconstantsCtrl
 * @description
 * # SiteconstantsCtrl
 * Controller of the kenwoodApp
 */
angular.module('kenwoodApp')
  .controller('SiteconstantsCtrl', function ($scope, $sce, $firebase, $location) {
    var ref = new Firebase('https://kenwooddennard.firebaseio.com/constants');
    var sync = $firebase(ref);
    var syncObject = sync.$asObject();
    syncObject.$bindTo($scope, 'constant');
    // Comes from Angular Docs
    // https://code.angularjs.org/1.2.26/docs/guide/$location#browser-in-html5-fallback-mode-hashbang-mode-
    $scope.$location = {};
    angular.forEach('protocol host port path search hash'.split(' '), function(method){
      $scope.$location[method] = function(){
        var result = $location[method].call($location);
        return angular.isObject(result) ? angular.toJson(result) : result;
      };
    });
    $scope.pathName = $location.path();
});
