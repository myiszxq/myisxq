angular.module('AnswerChannelModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('answerChannel',{
               url:'/answerChannel',
               templateUrl:'./modules/answerChannel/answerChannel.html',
               controller:'AnswerChannelCtrl',
               css:'./modules/answerChannel/answerChannel.css'
          })

     })

//  .filter('wang',function(){
//      return function(ele){
//          return ele+">>"
//      }
//  })
//
    .service('ChannelService',['$http',function($http){
//       this.add = function(x,y){
//            return x+y;
//       }
         this.getData = function(){
            return $http.get('./modules/answerChannel/answerChannel.json')
         }
    }])

     .controller('AnswerChannelCtrl',['$scope','ChannelService',function($scope,ChannelService){

//        $scope.number = MathService.add;
          ChannelService.getData().success(function(res){
              $scope.arr = res;
          })
		
     }])