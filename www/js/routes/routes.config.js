'use srtict'
angular
.module('starter')
.config(routesConfig);

function routesConfig($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise("/");
  $stateProvider
   .state('list', {
      url: "/",
      templateUrl: 'templates/list.html',
      controller: 'ListController'
     })
   .state('list-feature', {
      url: "/list/detail/:id",
      templateUrl: 'templates/list-feature.html',
      controller: 'ListController'
    })
  .state('actionSheet', {
      url: "/features/action-sheet",
      templateUrl: 'templates/action-sheet.html',
      controller: 'actionSheetController'
    });
}