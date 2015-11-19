angular
  .module('starter')
  .controller('actionSheetController', actionSheetController);

function actionSheetController($scope, $cordovaActionSheet){
//plugin cordova 

  $scope.show = function(){
     var options = {
        title: 'TItulo do meu teste!',
        buttonLabels: ['Share via Facebook', 'Share via Twitter'],
        addCancelButtonWithLabel: 'Cancel',
        androidEnableCancelButton : true,
        winphoneEnableCancelButton : true,
        addDestructiveButtonWithLabel : 'Delete it'
      };

    document.addEventListener("deviceready", function () {

      function sucess(response){
        alert('sucesso');

      }
      function error(response){
        alert('erro');
        
      }

      $cordovaActionSheet
        .show(options)
        .then(sucess, error);


    }, false);
}

}