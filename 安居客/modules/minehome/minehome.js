angular.module('MinehomeModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('minehome',{
               url:'/minehome',
               templateUrl:'./modules/minehome/minehome.html',
               controller:'MinehomeCtrl',
               css:'./modules/minehome/minehome.css'
          })
          

     })
           .controller('MinehomeCtrl',['$scope',function($scope){
          
          }]);
   
