/**
 * Created by shenyang on 2018/10/24.
 */
define(['angular-amd'], function($amd) {
	'use strict';
	return function($stateProvider, $urlRouterProvider, $locationProvider) {
		
		$urlRouterProvider.otherwise('/login');
		
		$stateProvider
		/* 登陆页 */
		.state($amd.route({
			name: 'login', 
			url: '/login',
			templateUrl: 'views/login/index.html',
			controllerUrl: 'views/login/index.js',
			css: ['static/css/menu/style.css','views/login/index.css']
		}))
		/* 主页 */
		.state($amd.route({
			name: 'home', 
			url: '/home',
			// cache: 'true',
			templateUrl: 'views/home/index.html',
			controllerUrl: 'views/home/index.js',
			css: ['views/home/index.css']
		}))
		/* 音乐页 */
		.state($amd.route({
			name: 'home.music', 
			url: '/music',
			templateUrl: 'views/music/index.html',
			controllerUrl: 'views/music/index.js',
			css: ['views/music/index.css']

		}))
		/* 统计 */
		.state($amd.route({
			name: 'home.charts', 
			url: '/charts',
			templateUrl: 'views/charts/index.html',
			controllerUrl: 'views/charts/index.js',
			css: ['views/charts/index.css']
		}))
		/* 视频 */
		.state($amd.route({
			name: 'home.video', 
			url: '/video',
			params: {
				'id': ''
			},
			templateUrl: 'views/video/index.html',
			controllerUrl: 'views/video/index.js'
		}))
		/* 个人信息 */
		.state($amd.route({
			name: 'home.profile', 
			url: '/profile',
			templateUrl: 'views/profile/index.html',
			controllerUrl: 'views/profile/index.js',
			css: ['views/profile/index.css']
		}))
	}
});
