angular.module('AnswerProblemModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('answerProblem',{
               url:'/answerProblem',
               templateUrl:'./modules/answerProblem/answerProblem.html',
               controller:'AnswerProblemCtrl',
               css:'./modules/answerProblem/answerProblem.css'
          })

     })

//  .filter('wang',function(){
//      return function(ele){
//          return ele+">>"
//      }
//  })
//
//  .service('MathService',['$http',function($http){
//       this.add = function(x,y){
//            return x+y;
//       }
//       this.getData = function(){
//          return $http.get('./data.json')
//       }
//  }])

     .controller('AnswerProblemCtrl',['$scope'/*,'MathService'*/,function($scope/*,MathService*/){
//        $scope.name = 'xiaowei';
//        $scope.number = MathService.add;
//        MathService.getData().success(function(res){
//            $scope.arr = res;
//        })
     }])