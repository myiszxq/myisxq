angular.module('OrderModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('order',{
               url:'/order',
               templateUrl:'./modules/order/order.html',
               controller:'OrderCtrl',
               css:'./modules/order/order.css'
          })
          

     })
           .controller('OrderCtrl',['$scope',function($scope){
          
          }]);
   
