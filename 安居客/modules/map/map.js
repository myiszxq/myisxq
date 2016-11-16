angular.module('MapModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('map',{
               url:'/map',
               templateUrl:'./modules/map/map.html',
               controller:'MapCtrl',
               css:'./modules/map/map.css'
          })
          

     })
     
     	.service('mapService',['$http',function($http){
         this.fn = function(){
             var map = new AMap.Map('mapApi', {
	            center: [117.000923, 36.675807],
	            zoom: 6
		        })
		        map.plugin(["AMap.ToolBar"], function() {
		            map.addControl(new AMap.ToolBar());
		        })
         }
         
    }])
     	
     	
      .controller('MapCtrl',['$scope','mapService',function($scope,mapService){
           	$scope.fn=mapService.fn()
          }])
   
