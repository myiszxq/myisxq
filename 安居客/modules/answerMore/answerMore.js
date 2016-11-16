angular.module('AnswerMoreModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('answerMore',{
               url:'/answerMore',
               templateUrl:'./modules/answerMore/answerMore.html',
               controller:'AnswerMoreCtrl',
               css:'./modules/answerMore/answerMore.css'
          })

     })

//  .filter('wang',function(){
//      return function(ele){
//          return ele+">>"
//      }
//  })
//
    .service('MoreService',['$http',function($http){
         this.add = function(x,y){
              return x+y;
         }
         this.getData = function(){
            return $http.get('./modules/answerMore/answerMore.json')
         }
    }])

     .controller('AnswerMoreCtrl',['$scope','MoreService',function($scope,MoreService){

//        $scope.number = MathService.add;
          MoreService.getData().success(function(res){
              $scope.arr = res;
          })
     }])