'use strict';

/**
 * @ngdoc function
 * @name kenwoodApp.controller:SiteconstantsCtrl
 * @description
 * # SiteconstantsCtrl
 * Controller of the kenwoodApp
 */
angular.module('kenwoodApp')
  .controller('SiteconstantsCtrl', function ($scope, $sce, $firebase) {
    var ref = new Firebase('https://kenwooddennard.firebaseio.com/constants');
    var sync = $firebase(ref);
    var syncObject = sync.$asObject();
    syncObject.$bindTo($scope, 'constant');
});
