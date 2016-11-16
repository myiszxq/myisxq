
angular.module('zufangModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('zufang',{
               url:'/zufang',
               templateUrl:'./modules/zufang/zufang.html',
               controller:'zufangCtrl',
               css:'./modules/zufang/zufang.css'
          })

     })

    /*.filter('wang',function(){
        return function(ele){
            return ele+">>"
        }
    })*/

   .service('zufangService',['$http',function($http){
         this.getData = function(){
            return $http.get('modules/zufang/zufang.json')
         }
    }])

    .controller('zufangCtrl',['$scope','zufangService',function($scope,zufangService){
       
         zufangService.getData().success(function(res){
              $scope.arr = res;
          })
     }])
