angular.module('BanModules',['ui.router'])

     .config(function($stateProvider,$urlRouterProvider){
            $urlRouterProvider.otherwise('ban');
          $stateProvider.state('fangjia.ban',{
               url:'/ban',
               templateUrl:'./modules/fangjia/bankuai/bankuai.html',
               controller:'BanCtrl',
               css:'./modules/fangjia/bankuai/bankuai.css'
          })
          

     })
     .controller('BanCtrl',['$scope',function($scope){
         $("body").on("click",$("#mo2 a"),function(e){
            e.preventDefault();
            $(e.target).parent().addClass("gu").siblings().removeClass("gu");
          })  
     }]);
   