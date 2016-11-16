angular.module('HistoryModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('history',{
               url:'/history',
               templateUrl:'./modules/history/history.html',
               controller:'HistoryCtrl',
               css:'./modules/history/history.css'
          })
          

     })
           .controller('HistoryCtrl',['$scope',function($scope){
          
          }]);
   
