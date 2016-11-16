define(
	[
	'text!./store.html',
	'css!./store.css'
	],
	function(html){
		function render(){
			$('#cont').html(html);
		}
		return {
			 render:render
		}
})