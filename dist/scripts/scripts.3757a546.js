"use strict";angular.module("kenwoodApp",["angular-loading-bar","ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","firebase","firebase.utils","simpleLogin"]),angular.module("kenwoodApp").controller("MainCtrl",["$scope","$sce","$firebase",function(a,b,c){var d=new Firebase("https://kenwooddennard.firebaseio.com/main"),e=c(d),f=e.$asObject();f.$bindTo(a,"content"),a.init=function(){a.isNotEditable="isNotEditable"}}]),angular.module("firebase.config",[]).constant("FBURL","https://kenwooddennard.firebaseio.com").constant("SIMPLE_LOGIN_PROVIDERS",["password"]).constant("loginRedirectPath","/login"),angular.module("firebase.utils",["firebase","firebase.config"]).factory("fbutil",["$window","FBURL","$firebase",function(a,b,c){function d(a){for(var b=0;b<a.length;b++)if(angular.isArray(a[b]))a[b]=d(a[b]);else if("string"!=typeof a[b])throw new Error("Argument "+b+" to firebaseRef is not a string: "+a[b]);return a.join("/")}function e(c){var e=new a.Firebase(b),f=Array.prototype.slice.call(arguments);return f.length&&(e=e.child(d(f))),e}function f(a,b){var d=e(a);return b=angular.extend({},b),angular.forEach(["limit","startAt","endAt"],function(a){if(b.hasOwnProperty(a)){var c=b[a];d=d[a].apply(d,angular.isArray(c)?c:[c]),delete b[a]}}),c(d,b)}return{syncObject:function(a,b){return f.apply(null,arguments).$asObject()},syncArray:function(a,b){return f.apply(null,arguments).$asArray()},ref:e}}]),angular.module("kenwoodApp").controller("ChatCtrl",["$scope","fbutil","$timeout",function(a,b,c){function d(b){a.err=b,c(function(){a.err=null},5e3)}a.messages=b.syncArray("messages",{limit:10}),a.messages.$loaded()["catch"](d),a.addMessage=function(b){b&&a.messages.$add(b)["catch"](d)}}]),angular.module("kenwoodApp").filter("reverse",function(){return function(a){return angular.isArray(a)?a.slice().reverse():[]}}),function(){angular.module("simpleLogin",["firebase","firebase.utils","firebase.config"]).factory("authRequired",["simpleLogin","$q",function(a,b){return function(){return a.getUser().then(function(a){return a?a:b.reject({authRequired:!0})})}}]).factory("simpleLogin",["$firebaseSimpleLogin","fbutil","$q","$rootScope","createProfile","changeEmail",function(a,b,c,d,e,f){function g(){j.initialized=!0,j.user=h.user||null,angular.forEach(i,function(a){a(j.user)})}var h=a(b.ref()),i=[],j={user:null,initialized:!1,getUser:function(){return h.$getCurrentUser()},login:function(a,b){return angular.element("body").addClass("isLoggedIn"),h.$login(a,b)},logout:function(){h.$logout(),angular.element("body").removeClass("isLoggedIn").removeAttr("class")},createAccount:function(a,b,c){return h.$createUser(a,b).then(function(){return j.login("password",{email:a,password:b})}).then(function(b){return e(b.uid,a,c).then(function(){return b})})},changePassword:function(a,b,c){return h.$changePassword(a,b,c)},changeEmail:function(a,b){return f(a,j.user.email,b,this)},removeUser:function(a,b){return h.$removeUser(a,b)},watch:function(a,b){i.push(a),j.getUser().then(function(b){a(b)});var c=function(){var b=i.indexOf(a);b>-1&&i.splice(b,1)};return b&&b.$on("$destroy",c),c}};return d.$on("$firebaseSimpleLogin:login",g),d.$on("$firebaseSimpleLogin:logout",g),d.$on("$firebaseSimpleLogin:error",g),h.$getCurrentUser(g),j}]).factory("createProfile",["fbutil","$q","$timeout",function(a,b,c){return function(d,e,f){function g(a){return h(a.substr(0,a.indexOf("@"))||"")}function h(a){a+="";var b=a.charAt(0).toUpperCase();return b+a.substr(1)}var i=a.ref("users",d),j=b.defer();return i.set({email:e,name:f||g(e)},function(a){c(function(){a?j.reject(a):j.resolve(i)})}),j.promise}}]).factory("changeEmail",["fbutil","$q",function(a,b){return function(c,d,e,f){function g(){return f.login("password",{email:n.old.email,password:c}).then(function(a){n.old.uid=a.uid})}function h(){var c=b.defer();return n.old.ref=a.ref("users",n.old.uid),n.old.ref.once("value",function(a){var b=a.val();null===b?c.reject(d+" not found"):(n.old.name=b.name,n.curr.name=b.name,c.resolve())},function(a){c.reject(a)}),c.promise}function i(){return f.createAccount(n.curr.email,c,n.old.name).then(function(a){n.curr.uid=a.uid})}function j(){var c=b.defer();n.curr.ref=a.ref("users",n.curr.uid);var d={email:n.curr.email,name:n.curr.name};return n.curr.ref.set(d,function(a){a?c.reject(a):c.resolve()}),c.promise}function k(){var a=b.defer();return n.old.ref.remove(function(b){b?a.reject(b):a.resolve()}),a.promise}function l(){var a=b.defer();return f.removeUser(n.old.email,c).then(function(){a.resolve()},function(b){a.reject(b)}),a.promise}function m(){return f.login("password",{email:n.curr.email,password:c})}var n={old:{email:d},curr:{email:e}};return g().then(h).then(i).then(j).then(g).then(k).then(l).then(m)["catch"](function(a){return console.error(a),b.reject(a)})}}])}(),angular.module("kenwoodApp").controller("LoginCtrl",["$scope","simpleLogin","$location",function(a,b,c){function d(d,e){a.err=null,b.login(d,e).then(function(){c.path("/account")},function(b){a.err=b})}a.passwordLogin=function(a,b){d("password",{email:a,password:b,rememberMe:!0})},a.createAccount=function(d,e,f){a.err=null,e?e!==f?a.err="Passwords do not match":b.createAccount(d,e).then(function(){c.path("/account")},function(b){a.err=b}):a.err="Please enter a password"}}]),angular.module("kenwoodApp").controller("AccountCtrl",["$scope","user","simpleLogin","fbutil","$timeout",function(a,b,c,d,e){function f(a){h(a,"danger")}function g(a){h(a,"success")}function h(b,c){var d={text:b,type:c};a.messages.unshift(d),e(function(){a.messages.splice(a.messages.indexOf(d),1)},1e4)}function i(b){return a.profile?(a.profile.$destroy(),!0):void d.syncObject("users/"+b.uid).$bindTo(a,"profile")}a.user=b,a.logout=c.logout,a.messages=[],i(b),a.changePassword=function(d,e,h){a.err=null,d&&e?e!==h?f("Passwords do not match"):c.changePassword(b.email,d,e).then(function(){g("Password changed")},f):f("Please enter all fields")},a.changeEmail=function(b,d){a.err=null,c.changeEmail(b,d).then(function(a){i(a),g("Email changed")})["catch"](f)}}]),angular.module("kenwoodApp").directive("ngShowAuth",["simpleLogin","$timeout",function(a,b){var c;return a.watch(function(a){c=!!a}),{restrict:"A",link:function(d,e){function f(){b(function(){e.toggleClass("ng-cloak",!c)},0)}e.addClass("ng-cloak"),a.watch(f,d),a.getUser(f)}}}]),angular.module("kenwoodApp").directive("ngHideAuth",["simpleLogin","$timeout",function(a,b){var c;return a.watch(function(a){c=!!a}),{restrict:"A",link:function(d,e){function f(){b(function(){e.toggleClass("ng-cloak",c!==!1)},0)}e.addClass("ng-cloak"),a.watch(f,d),a.getUser(f)}}}]),angular.module("kenwoodApp").config(["$routeProvider","SECURED_ROUTES",function(a,b){a.whenAuthenticated=function(c,d){return d.resolve=d.resolve||{},d.resolve.user=["authRequired",function(a){return a()}],a.when(c,d),b[c]=!0,a}}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl"}).when("/chat",{templateUrl:"views/chat.html",controller:"ChatCtrl"}).whenAuthenticated("/account",{templateUrl:"views/account.html",controller:"AccountCtrl"}).when("/chat",{templateUrl:"views/chat.html",controller:"ChatCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/schedule",{templateUrl:"views/schedule.html",controller:"ScheduleCtrl"}).when("/media",{templateUrl:"views/media.html",controller:"MediaCtrl"}).when("/shop",{templateUrl:"views/shop.html",controller:"ShopCtrl"}).whenAuthenticated("/shop-admin",{templateUrl:"views/shopadmin.html",controller:"ShopadminCtrl"}).whenAuthenticated("/schedule-admin",{templateUrl:"views/shcheduleadmin.html",controller:"ShcheduleadminCtrl"}).whenAuthenticated("/site-admin",{templateUrl:"views/siteadmin.html",controller:"SiteadminCtrl"}).whenAuthenticated("/image-admin",{templateUrl:"views/imageadmin.html",controller:"ImageadminCtrl"}).whenAuthenticated("/lesson-admin",{templateUrl:"views/lessonadmin.html",controller:"LessonadminCtrl"}).whenAuthenticated("/video-admin",{templateUrl:"views/videoadmin.html",controller:"VideoadminCtrl"}).when("/lessons",{templateUrl:"views/lessons.html",controller:"LessonsCtrl"}).when("/newsletter",{templateUrl:"views/newsletter.html",controller:"NewsletterCtrl"}).otherwise({redirectTo:"/"})}]).run(["$rootScope","$location","simpleLogin","SECURED_ROUTES","loginRedirectPath",function(a,b,c,d,e){function f(a){!a&&g(b.path())&&b.path(e)}function g(a){return d.hasOwnProperty(a)}c.watch(f,a),a.$on("$routeChangeError",function(a,c,d,f){angular.isObject(f)&&f.authRequired&&b.path(e)})}]).constant("SECURED_ROUTES",{}),angular.module("kenwoodApp").controller("AboutCtrl",["$scope","$sce","$firebase",function(a,b,c){var d=new Firebase("https://kenwooddennard.firebaseio.com/about"),e=c(d),f=e.$asObject();f.$bindTo(a,"content"),a.init=function(){a.isNotEditable="isNotEditable"}}]),angular.module("kenwoodApp").controller("ScheduleCtrl",["$scope","$sce","$firebase",function(a,b,c){var d=new Firebase("https://kenwooddennard.firebaseio.com/schedule"),e=c(d),f=e.$asObject();f.$bindTo(a,"content"),a.init=function(){a.isNotEditable="isNotEditable"}}]),angular.module("kenwoodApp").controller("MediaCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("kenwoodApp").controller("ShopCtrl",["$scope","fbutil",function(a,b){a.items=b.syncArray("items",{limit:12})}]),angular.module("kenwoodApp").controller("ShopadminCtrl",["$scope","fbutil","$timeout",function(a,b,c){function d(b){a.err=b,c(function(){a.err=null},5e3)}a.items=b.syncArray("items",{limit:12}),a.items.$loaded()["catch"](d),a.init=function(){a.isNotEditable="isNotEditable",a.editItem="editItem",a.deleteItem="deleteItem"},a.addItem=function(b){b&&a.items.$add(b)["catch"](d)},a.removeItem=function(b){a.items.$remove(b)},a.updateItem=function(b){a.items.$save(b)}}]),angular.module("kenwoodApp").controller("NewsletterCtrl",function(){}),angular.module("kenwoodApp").filter("unsafe",["$sce",function(a){return a.trustAsHtml}]),angular.module("kenwoodApp").directive("editContent",function(){return{template:'<div class="edit-content clearfix" ng-show-auth><div class="col-sm-12 alert alert-info" style="margin-bottom: 0"><p ng-show="!isNotEditable" class="text-center"><button class="btn btn-success" ng-click="isNotEditable = !isNotEditable">Edit Images/Videos On This Page</button></p><p ng-show="isNotEditable" class="text-center"><button class="btn btn-success" ng-click="isNotEditable = !isNotEditable">Done Editing</button></p></div></div>',restrict:"E"}}),angular.module("kenwoodApp").directive("bannerImage",function(){return{template:'<div><img ng-src="{{content.banner_image}}" alt="" class="img-responsive"><div class="well" ng-show="isNotEditable"><label for="banner_image">Edit Banner Image (1700x582)</label><input type="text" ng-model="content.banner_image" class="form-control" id="banner_image"></div></div>',restrict:"E"}}),angular.module("kenwoodApp").controller("ShcheduleadminCtrl",["$scope","$sce","fbutil","$timeout",function(a,b,c,d){function e(b){a.err=b,d(function(){a.err=null},5e3)}a.items=c.syncArray("events",{limit:12}),a.items.$loaded()["catch"](e),a.eventCount=a.items.length,a.noEventMessage=function(){return a.items.length<1?!0:void 0},a.init=function(){a.isNotEditable="isNotEditable",a.editItem="editItem",a.deleteItem="deleteItem"},a.addItem=function(b){b&&a.items.$add(b)["catch"](e)},a.removeItem=function(b){a.items.$remove(b)},a.updateItem=function(b){a.items.$save(b)}}]),angular.module("kenwoodApp").controller("SiteadminCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("kenwoodApp").controller("SiteconstantsCtrl",["$scope","$sce","$firebase","$location",function(a,b,c,d){var e=new Firebase("https://kenwooddennard.firebaseio.com/constants"),f=c(e),g=f.$asObject();g.$bindTo(a,"constant"),a.$location={},angular.forEach("protocol host port path search hash".split(" "),function(b){a.$location[b]=function(){var a=d[b].call(d);return angular.isObject(a)?angular.toJson(a):a}}),a.pathName=d.path()}]),angular.module("kenwoodApp").controller("ScheduledisplayCtrl",["$scope","fbutil",function(a,b){a.events=b.syncArray("events"),a.eventCount=a.events,a.noEventMessage=function(){return a.events.length<1?!0:void 0}}]),angular.module("kenwoodApp").directive("contenteditable",["$sce",function(a){return{restrict:"A",require:"?ngModel",link:function(b,c,d,e){function f(){var a=c.html();d.stripBr&&"<br>"===a&&(a=""),e.$setViewValue(a)}e&&(e.$render=function(){c.html(a.getTrustedHtml(e.$viewValue||""))},c.on("blur keyup change",function(){b.$evalAsync(f)}),f())}}}]),angular.module("kenwoodApp").directive("editItem",function(){return{template:'<div ng-show="!deleteItem" class="btn-group"><button class="btn btn-sm btn-primary" ng-click="editItem = !editItem">Done Editing</button><button class="btn btn-sm btn-warning" ng-click="deleteItem = !deleteItem">Delete</button></div><div ng-show="deleteItem"><p class="small">You sure you want to delete this?</p><div class="btn-group"><button class="btn btn-sm btn-info" ng-click="deleteItem = !deleteItem">Don\'t Delete</button><button class="btn btn-sm btn-danger" ng-click="removeItem($index)">Yes, Delete This Item</button></div></div>',restrict:"E"}}),angular.module("kenwoodApp").directive("addItem",function(){return{template:'<p ng-show="!isNotEditable" class="pull-right"><button class="btn btn-primary" ng-click="isNotEditable = !isNotEditable">Add an Item</button></p><p ng-show="isNotEditable" class="pull-right"><button class="btn btn-primary" ng-click="isNotEditable = !isNotEditable">Done Adding Items</button></p>',restrict:"E"}}),angular.module("kenwoodApp").controller("ImageadminCtrl",["$scope","$sce","fbutil","$timeout",function(a,b,c,d){function e(b){a.err=b,d(function(){a.err=null},5e3)}a.items=c.syncArray("pics",{limit:12}),a.items.$loaded()["catch"](e),a.picsCount=a.items.length,a.noPicsMessage=function(){return a.items.length<1?!0:void 0},a.init=function(){a.isNotEditable="isNotEditable",a.editItem="editItem",a.deleteItem="deleteItem"},a.addItem=function(b){b&&a.items.$add(b)["catch"](e)},a.removeItem=function(b){a.items.$remove(b)},a.updateItem=function(b){a.items.$save(b)}}]),angular.module("kenwoodApp").controller("ImagedisplayCtrl",["$scope","fbutil",function(a,b){a.items=b.syncArray("pics")}]),angular.module("kenwoodApp").controller("LessonadminCtrl",["$scope","fbutil","$sce","$timeout",function(a,b,c,d){function e(b){a.err=b,d(function(){a.err=null},5e3)}a.items=b.syncArray("lessons",{limit:12}),a.items.$loaded()["catch"](e),a.eventCount=a.items.length,a.noEventMessage=function(){return a.items.length<1?!0:void 0},a.init=function(){a.isNotEditable="isNotEditable",a.editItem="editItem",a.deleteItem="deleteItem"},a.addItem=function(b){b&&a.items.$add(b)["catch"](e)},a.removeItem=function(b){a.items.$remove(b)},a.updateItem=function(b){a.items.$save(b)}}]),angular.module("kenwoodApp").controller("VideoadminCtrl",["$scope","$sce","fbutil","$timeout",function(a,b,c,d){function e(b){a.err=b,d(function(){a.err=null},5e3)}a.items=c.syncArray("vids",{limit:12}),a.items.$loaded()["catch"](e),a.vidCount=a.items.length,a.noVidsMessage=function(){return a.items.length<1?!0:void 0},a.init=function(){a.isNotEditable="isNotEditable",a.editItem="editItem",a.deleteItem="deleteItem"},a.addItem=function(b){b&&a.items.$add(b)["catch"](e)},a.removeItem=function(b){a.items.$remove(b)},a.updateItem=function(b){a.items.$save(b)}}]),angular.module("kenwoodApp").controller("VideodisplayCtrl",["$scope","fbutil",function(a,b){a.items=b.syncArray("vids")}]),angular.module("kenwoodApp").controller("LessonsCtrl",["$scope","fbutil",function(a,b){a.items=b.syncArray("lessons",{limit:12})}]),angular.module("kenwoodApp").directive("focus",function(){return{restrict:"A",link:function(a,b){b[0].focus()}}});