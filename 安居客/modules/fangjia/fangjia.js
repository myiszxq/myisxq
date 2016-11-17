angular.module('FangModules',['BanModules','QuModules'])
	
	.config(function($stateProvider,$urlRouterProvider){
         /* $urlRouterProvider.otherwise('.ban');*/
          // $urlRouterProvider.when("", "/fangjia.qu");
		      $stateProvider.state('fangjia',{
               url:'/fangjia',
               templateUrl:'./modules/fangjia/fangjia.html',
               controller:'FangCtrl',
               css:'./modules/fangjia/fangjia.css'
          })

     })
	.controller('FangCtrl',['$scope','$http',function($scope,$http){
         $http.get("./modules/fangjia/home.json").success(function(s){
               $scope.arr = s;
         })
             
     }])