angular.module('AnswerSearchModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('answerSearch',{
               url:'/answerSearch',
               templateUrl:'./modules/answerSearch/answerSearch.html',
               controller:'AnswerSearchCtrl',
               css:'./modules/answerSearch/answerSearch.css'
          })

     })

//  .filter('wang',function(){
//      return function(ele){
//          return ele+">>"
//      }
//  })
//
    .service('SearchService',['$http',function($http){
//       this.add = function(x,y){
//            return x+y;
//       }
         this.getData = function(){
            return $http.get('./modules/answerSearch/answerSearch.json')
         }
    }])

    .controller('AnswerSearchCtrl',['$scope','SearchService',function($scope,SearchService){
//        $scope.number = MathService.add;
          SearchService.getData().success(function(res){
              $scope.arr = res;
          })
     }])