'use strict';
var app=angular.module('web-app', ['ui.router', 'ngAnimate', 'angular-flexslider'])
/**
 * Configure the Routes
 */

.config(function ($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider
      .when('', '/')
      .when('/', '/home')
      .otherwise('/home');
      
      $stateProvider
        
        .state('base', {
          url: '/',
          templateUrl: 'partials/base.html',
          controller: 'BaseCtrl'
        })
    
      
        .state('base.home', {
          url: 'home',
          views: {
            'main-view': {
              templateUrl: 'partials/home.html',
              controller: 'BaseCtrl',
            }
          }
        })
});

app.constant("const_url","http://localhost:8100");

app.run(['$rootScope', '$state', '$location', function ($rootScope, $state, $location) {

  $rootScope.$on('$stateChangeSuccess', function (event, toState, current, toParams) {
    $rootScope.const_url = "http://localhost:8100"; /* this is used for url which is changed local server 
    to live server */
    $rootScope.title = toState.title; 
  });

}]);
