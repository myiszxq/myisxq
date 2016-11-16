angular.module('anjuke',['ui.router','angularCSS',
	'HomeModules',
	'FangModules',
	'TuiModules',
	'MaiModules',
	'CityModules',
	'MapModules',
	'SeekModules',
	'MineModules',
	'CommentModules',
	'CollectModules',
	'HistoryModules',
	'MinehomeModules',
	'OrderModules',
	'AnswerChannelModules',
	'AnswerMoreModules',
	'AnswerProblemModules',
	'AnswerSearchModules',
	'DetailModules',
	'XingFangModules',
	'xiaoquModules',
	'ershouModules',
	'zufangModules',
	'shangpuModules',
	'daikuanModules'
])

.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('home');

})

 