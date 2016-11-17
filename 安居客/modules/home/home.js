angular.module('HomeModules',[])
	
	.config(function($stateProvider,$urlRouterProvider){

		      $stateProvider.state('home',{
               url:'/home',
               templateUrl:'./modules/home/home.html',
               controller:'HomeCtrl',
               css:'./modules/home/home.css'
          })

     })
     /*.service("Service",["$http",function($http){
          this.getdata = function(){
               return $http().get("./modules/home/home.json")
          }
     }])*/
	.controller('HomeCtrl',['$scope','$http',function($scope,$http){
         $http.get("./modules/home/home.json").success(function(s){
               $scope.arr = s;
         })
         $(".xx ul").data('name',true);
         $(function(){
            $(".xx").on("click",$("p"),function(e){
                if($(e.target).next().data('name')){
                  $(e.target).next().show();
                  $(e.target).next().data('name',false);
                }else{
                  $(e.target).next().hide();
                  $(e.target).next().data('name',true);
                }
                
            })
            var a = 0;
             function s(){
              if(document.querySelector(".n_1")){
                return  true;
              }else{
                return  false;
              }
            }
            function b(){
              if(a < -73){
                a = 0;                
              }else{
                a += -12.6 ;
              } 
              $(".n_1").css('margin-top',a+"%")
            } 
            setInterval( function(){          
            s() && b()}  ,2000)
         })

        /* var i = 0;
         setInterval(function(){
           document.
         },2000)*/
     }])