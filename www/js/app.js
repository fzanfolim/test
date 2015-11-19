'use srtict'
angular
.module('starter', [
  'ionic',
  'ui.router',
  'ngCordova'
]);

angular
  .module('starter')
  .controller('ListController', ListController);

function ListController($scope){

$scope.list = [
      {
        name:'Fernando Yura Zanfolim',
        title: 'Teste 123'
      },
      {
        name:'João Yura Zanfolim',
        title: 'Teste 123'
      },
      {
        name:'Felipe Zanfolim',
        title: 'Teste 123'
      },
      {
        name:'Ana Carolina Yura Zanfolim',
        title: 'Teste 123'
      }

      ];



  
}
