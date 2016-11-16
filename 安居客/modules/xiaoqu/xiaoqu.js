
angular.module('xiaoquModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('xiaoqu',{
               url:'/xiaoqu',
               templateUrl:'./modules/xiaoqu/xiaoqu.html',
               controller:'xiaoquCtrl',
               css:'./modules/xiaoqu/xiaoqu.css'
          })

     })

    /*.filter('wang',function(){
        return function(ele){
            return ele+">>"
        }
    })*/

    /*.service('MathService',['$http',function($http){
         this.add = function(x,y){
              return x+y;
         }
         this.getData = function(){
            return $http.get('./data.json')
         }
    }])*/

    .controller('xiaoquCtrl',['$scope',/*'MathService',*/function($scope,MathService){
        /*  $scope.name = 'xiaowei';
          $scope.number = MathService.add;
          MathService.getData().success(function(res){
              $scope.arr = res;
          })*/ 

     }])
