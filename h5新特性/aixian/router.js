define(['backbone'],function(){

  var Router = Backbone.Router.extend({

    routes: {
      "home":      "homeFun",
      "store":     "storeFun",
      "order":     "orderFun" ,
      "cart":      "cartFun" ,
      "mine":      "mineFun",
      "*actions":  "defaultAction"
    },

    homeFun: function() {
        require(['./modules/home/home.js'],function(home){
          home.render();
        })
    },
    storeFun: function() {
        require(['./modules/store/store.js'],function(store){
          store.render();
        })
    },
    /*storeFun: function() {
        require(['./modules/store/store.js'],function(store){
          store.render();
        })
    },*/
    orderFun:function(){
      require(['./modules/order/order.js'],function(order){
          order.render();
        })
    },
    cartFun:function(){

    },
    mineFun:function(){

    },
    defaultAction:function(){
      location.hash = 'home';
    }
  });

  var router = new Router();
})
