/**
 * Created by shenyang on 2018/10/24.
 */
require.config({
	// urlArgs: 'v=' + Math.random(),
	baseUrl: "./",
	waitSeconds: 7,
	paths: {
		// 'angular': 			'libs/angular/v1.7/angular.min',
		// 'angular-animate': 	'libs/angular/v1.7/angular-animate.min',
		// 'ui-router': 		'libs/router/v0.4.2/ui-router.min',
		'angular': location.host.indexOf("shenwenhao") > -1 || location.host.indexOf("vjoke") > -1 ? 'https://cdn.bootcss.com/angular.js/1.7.3/angular.min' : 'libs/angular/v1.7/angular.min',
		'angular-animate': location.host.indexOf("shenwenhao") > -1 || location.host.indexOf("vjoke") > -1 ? 'https://cdn.bootcss.com/angular.js/1.7.2/angular-animate.min' : 'libs/angular/v1.7/angular-animate.min',
		'ui-router': location.host.indexOf("shenwenhao") > -1 || location.host.indexOf("vjoke") > -1 ? 'https://cdn.bootcss.com/angular-ui-router/0.4.2/angular-ui-router.min' : 'libs/router/v0.4.2/ui-router.min',
		'angular-amd': 'libs/angular/angularAMD.min',
		'angular-load': 'libs/angular/ngload.min',
		'angular-css': 'libs/angular/angular-css.min',
		'anim-in-out': 'libs/animate/anim-in-out',
		'jquery': 'libs/jquery/jquery-2.2.2.min',
		'echarts': 'libs/echarts/echarts.min',
		'macarons': 'libs/echarts/macarons',
		'route-manager': 'config/router',
		'underscore': 'libs/underscore/v1.9/underscore-min',
		'setting': 'config/setting',
		'app': 'config/app'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'underscore': {
			exports: '_'
		},
		'ui-router': ['angular'],
		'angular-amd': ['angular'],
		'angular-load': ['angular-amd'],
		'angular-css': ['angular'],
		'angular-animate': ['angular'],
		'anim-in-out': ['angular'],
		'macarons': ['echarts'],
		'route-manager': ['angular-amd', 'ui-router']
	}
});

define(['angular', 'ui-router', 'angular-amd', 'angular-css', 'app', 'jquery'],
	function(angular, $router, $amd, $css, $app) {
		$amd.bootstrap($app);
		// return $amd.bootstrap($app);
	});
