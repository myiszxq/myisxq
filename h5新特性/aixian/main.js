require.config({
	paths:{
		'jquery' : "lib/jquery",
		"backbone" : "lib/backbone",
		"css" : "lib/css",
		"text" : "lib/text",
		"underscore" : "lib/underscore"
	}
})
require([
	'jquery',
	'backbone',
	'./router.js'
	],function($,backbone){
		 backbone.history.start();
})