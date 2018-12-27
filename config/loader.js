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
		// 'jquery': 'libs/jquery/jquery-2.2.2.min',
		// 'echarts': 'libs/echarts/echarts.min',
		// 'angular-css': 'libs/angular/angular-css.min',
		// 'underscore': 'libs/underscore/v1.9/underscore-min',
		
		
		'jquery': location.host.indexOf("shenwenhao") > -1 || location.host.indexOf("vjoke") > -1 ? 'https://cdn.bootcss.com/jquery/2.2.2/jquery.min' : 'libs/jquery/jquery-2.2.2.min',
		'angular': location.host.indexOf("shenwenhao") > -1 || location.host.indexOf("vjoke") > -1 ? 'https://cdn.bootcss.com/angular.js/1.7.3/angular.min' : 'libs/angular/v1.7/angular.min',
		'angular-animate': location.host.indexOf("shenwenhao") > -1 || location.host.indexOf("vjoke") > -1 ? 'https://cdn.bootcss.com/angular.js/1.7.2/angular-animate.min' : 'libs/angular/v1.7/angular-animate.min',
		'ui-router': location.host.indexOf("shenwenhao") > -1 || location.host.indexOf("vjoke") > -1 ? 'https://cdn.bootcss.com/angular-ui-router/0.4.2/angular-ui-router.min' : 'libs/router/v0.4.2/ui-router.min',
		'angular-css': location.host.indexOf("shenwenhao") > -1 || location.host.indexOf("vjoke") > -1 ? 'https://cdn.bootcss.com/angular-css/1.0.8/angular-css.min' : 'libs/angular/angular-css.min',
		'echarts': location.host.indexOf("shenwenhao") > -1 || location.host.indexOf("vjoke") > -1 ? 'https://cdn.bootcss.com/echarts/3.8.5/echarts.min' : 'libs/echarts/echarts.min',
		'underscore': location.host.indexOf("shenwenhao") > -1 || location.host.indexOf("vjoke") > -1 ? 'https://cdn.bootcss.com/underscore.js/1.9.1/underscore-min' : 'libs/underscore/v1.9/underscore-min',
		'anim-in-out': 'libs/animate/anim-in-out',
		'angular-amd': 'libs/angular/angularAMD.min',
		'angular-load': 'libs/angular/ngload.min',
		'macarons': 'libs/echarts/macarons',
		'route-manager': 'config/router',
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
		return $amd.bootstrap($app);
	});
