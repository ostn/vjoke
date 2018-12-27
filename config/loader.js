/**
 * Created by shenyang on 2018/10/24.
 */
require.config({
	// urlArgs: 'v=' + Math.random(),
	baseUrl: "./",
	waitSeconds: 7,
	paths: {
		/* vjoke.cn域名下 加载cdn资源 */
		'jquery': location.host.indexOf("vjoke") > -1 ? 'https://cdn.bootcss.com/jquery/2.2.2/jquery.min' : 'libs/jquery/jquery-2.2.2.min',
		'angular': location.host.indexOf("vjoke") > -1 ? 'https://cdn.bootcss.com/angular.js/1.7.3/angular.min' : 'libs/angular/v1.7/angular.min',
		'angular-animate': location.host.indexOf("vjoke") > -1 ? 'https://cdn.bootcss.com/angular.js/1.7.3/angular-animate.min' : 'libs/angular/v1.7/angular-animate.min',
		'ui-router': location.host.indexOf("vjoke") > -1 ? 'https://cdn.bootcss.com/angular-ui-router/0.4.3/angular-ui-router.min' : 'libs/router/v0.4.2/ui-router.min',
		'echarts': location.host.indexOf("vjoke") > -1 ? 'https://cdn.bootcss.com/echarts/3.8.5/echarts.min' : 'libs/echarts/echarts.min',
		'underscore': location.host.indexOf("vjoke") > -1 ? 'https://cdn.bootcss.com/underscore.js/1.9.1/underscore-min' : 'libs/underscore/v1.9/underscore-min',
		
		'angular-css': 'libs/angular/angular-css.min',
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
