angular.module('MaiModules',[])
	
	.config(function($stateProvider,$urlRouterProvider){

        
          $stateProvider.state('maifang',{
               url:'/maifang',
               templateUrl:'./modules/maifang/maifang.html',
               controller:'MaiCtrl',
               css:'./modules/maifang/maifang.css'
          })

     })
     .controller('MaiCtrl',['$scope',function($scope,$http){
          
     }])