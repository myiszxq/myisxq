angular.module('DetailModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('detail',{
               url:'/detail',
               templateUrl:'./modules/detail/detail.html',
               controller:'DetailCtrl',
               css:'./modules/detail/detail.css'
          })
     })
     .service('swiperService',['$http',function($http){
        
         
    }])
    .controller('DetailCtrl',['$scope','swiperService','$http',function($scope,swiperService,$http){
			$http.get('./modules/detail/home.json').success(function(res){
				$scope.arr =res;
				

			})
		
    }])