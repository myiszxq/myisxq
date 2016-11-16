angular.module('CommentModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('comment',{
               url:'/comment',
               templateUrl:'./modules/comment/comment.html',
               controller:'CommentCtrl',
               css:'./modules/comment/comment.css'
          })
          

     })
           .controller('CommentCtrl',['$scope',function($scope){
          
          }]);
   
