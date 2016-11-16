
angular.module('shangpuModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('shangpu',{
               url:'/shangpu',
               templateUrl:'./modules/shangpu/shangpu.html',
               controller:'shangpuCtrl',
               css:'./modules/shangpu/shangpu.css'
          })

     })

    /*.filter('wang',function(){
        return function(ele){
            return ele+">>"
        }
    })*/

    .service('shangpuService',['$http',function($http){
         this.getData = function(){
            return $http.get('modules/shangpu/shangpu.json')
         }
    }])

    .controller('shangpuCtrl',['$scope','shangpuService',function($scope,shangpuService){
       
         shangpuService.getData().success(function(res){
              $scope.arr = res;
          })
     }])