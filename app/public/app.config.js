(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
      .state('home', {
        url: '/',
        component: 'showLinks'
      })
      .state('addLink', {
        url: '/new',
        component: 'addLink'
      })
      .state('editLink', {
        url: '/posts/:id/edit',
        component: 'editLink'
      })
      // etc...
  }
}());
