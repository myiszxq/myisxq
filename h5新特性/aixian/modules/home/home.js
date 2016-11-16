define([
	'text!./home.html',
	'css!./home.css'
	],
	function(html,css){
		function render(){
			$('#cont').html(html);
		}
		return {
			 render : render
		}
})