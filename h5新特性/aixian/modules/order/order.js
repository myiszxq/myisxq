define(
[
  'text!./order.html',
  'css!./order.css'
],
function(htm,css){

  function render(){
    $('#cont').html(htm);
  }
  return {
    render:render
  }

})