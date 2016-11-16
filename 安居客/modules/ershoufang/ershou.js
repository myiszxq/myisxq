
angular.module('ershouModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('ershou',{
               url:'/ershou',
               templateUrl:'./modules/ershoufang/ershou.html',
               controller:'ershouCtrl',
               css:'./modules/ershoufang/ershou.css'
          })

     })

    /*.filter('wang',function(){
        return function(ele){
            return ele+">>"
        }
    })*/

   .service('ershouService',['$http',function($http){
         this.getData = function(){
            return $http.get('modules/ershoufang/ershou.json')
         }
    }])

    .controller('ershouCtrl',['$scope','ershouService',function($scope,ershouService){
       
         ershouService.getData().success(function(res){
              $scope.arr = res;
          })

     }])