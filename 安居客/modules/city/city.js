angular.module('CityModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('city',{
               url:'/city',
               templateUrl:'./modules/city/city.html',
               controller:'CityCtrl',
               css:'./modules/city/city.css'
          })
          

     })
    .controller('CityCtrl',['$scope',function($scope){
          
    }])