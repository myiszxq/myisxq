angular.module('CollectModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('collect',{
               url:'/collect',
               templateUrl:'./modules/collect/collect.html',
               controller:'CollectCtrl',
               css:'./modules/collect/collect.css'
          })
          

     })
           .controller('CollectCtrl',['$scope',function($scope){
          
          }]);
   
