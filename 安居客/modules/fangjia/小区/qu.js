angular.module('QuModules',['ui.router'])

     .config(function($stateProvider,$urlRouterProvider){
          $stateProvider.state('fangjia.qu',{
               url:'/qu',
               templateUrl:'./modules/fangjia/小区/qu.html',
               controller:'QuCtrl',
               css:['./modules/fangjia/小区/qu.css','./modules/fangjia/fangjia.css']
          })
          

     })
     .controller('QuCtrl',['$scope',function($scope){
         $("body").on("click",$("#mo2 a"),function(e){
            e.preventDefault();
            $(e.target).parent().addClass("gu").siblings().removeClass("gu");
          })  
     }]);
   