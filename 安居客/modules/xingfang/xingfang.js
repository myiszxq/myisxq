
angular.module('XingFangModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('xingfang',{
               url:'/xingfang',
               templateUrl:'./modules/xingfang/xingfang.html',
               controller:'XingFangCtrl',
               css:'./modules/xingfang/xingfang.css'
          })

     })

    /*.filter('wang',function(){
        return function(ele){
            return ele+">>"
        }
    })*/

   .service('xinfangService',['$http',function($http){
        /* this.add = function(x,y){
              return x+y;
         }*/
         this.getData = function(){
            return $http.get('modules/xingfang/xinfang.json')
         }
    }])

    .controller('XingFangCtrl',['$scope','xinfangService',function($scope,xinfangService){
       
         xinfangService.getData().success(function(res){
              $scope.arr = res;
          })

     }])
