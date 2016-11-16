angular.module('SeekModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('seek',{
               url:'/seek',
               templateUrl:'./modules/seek/seek.html',
               controller:'SeekCtrl',
               css:'./modules/seek/seek.css'
          })
          

     })
           .controller('SeekCtrl',['$scope',function($scope){
          
          }]);
   
