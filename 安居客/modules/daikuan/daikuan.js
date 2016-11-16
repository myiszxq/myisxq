
angular.module('daikuanModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('daikuan',{
               url:'/daikuan',
               templateUrl:'./modules/daikuan/daikuan.html',
               controller:'daikuanCtrl',
               css:'./modules/daikuan/daikuan.css'
          })

     })

    /*.filter('wang',function(){
        return function(ele){
            return ele+">>"
        }
    })*/

   .service('daikuanService',['$http',function($http){
         this.getData = function(){
            return $http.get('modules/daikuan/daikuan.json')
         }
    }])

    .controller('daikuanCtrl',['$scope','daikuanService',function($scope,daikuanService){
       
         daikuanService.getData().success(function(res){
              $scope.arr = res;
          })

     }])
