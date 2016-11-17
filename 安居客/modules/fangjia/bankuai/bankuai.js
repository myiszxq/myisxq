angular.module('BanModules',['ui.router'])

     .config(function($stateProvider,$urlRouterProvider){
            // $urlRouterProvider.otherwise('ban');
          $stateProvider.state('fangjia.ban',{
               url:'/ban',
               templateUrl:'./modules/fangjia/bankuai/bankuai.html',
               controller:'BanCtrl',
               css:'./modules/fangjia/bankuai/bankuai.css'
          })
          

     })
     .controller('BanCtrl',['$scope',function($scope){
         $(".mo2 a").on("click",function(e){
            e.preventDefault();
            $(e.target).parent().addClass("gu").siblings().removeClass("gu");
          })  
         $(".fex p").data('name',true);
         $(".fex p").on("click",function(e){
          if( $(".fex p").data('name')){

            $(e.target).next().show();
            $(".fex p").data('name',false);
          }else{
            $(e.target).next().hide();
            $(".fex p").data('name',true);
          }
         })
         $(".mo31").on("click",function(){
            $(".fex").show();
            $(".ssss").animate({
              marginLeft:'0'
            },1000)
         })
         $(".fex span").on("click",function(){
             $(".ssss").animate({
              marginLeft:'100%'
            },1000)
            setTimeout( function(){
              $(".fex").hide()
            } ,1000)
         })
     }]);
   