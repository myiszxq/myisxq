angular.module('TuiModules',[])
	
	.config(function($stateProvider,$urlRouterProvider){

		      $stateProvider.state('tuijian',{
               url:'/tuijian',
               templateUrl:'./modules/tuijian/tuijian.html',
               controller:'TuiCtrl',
               css:'./modules/tuijian/tuijian.css'
          })

     })
	.controller('TuiCtrl',['$scope','$http',function($scope,$http){
         $http.get("./modules/fangjia/home.json").success(function(s){
               $scope.arr = s;
         })
     }])