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
			cache: 'true',
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
		/* 文档 */
		.state($amd.route({
			name: 'home.files', 
			url: '/files',
			templateUrl: 'views/files/index.html',
			controllerUrl: 'views/files/index.js',
			css: ['views/files/index.css']
		}))
		/* 微信 */
		.state($amd.route({
			name: 'home.wechat', 
			url: '/wechat',
			templateUrl: 'views/wechat/index.html',
			controllerUrl: 'views/wechat/index.js',
			css: ['views/wechat/index.css']
		}))
		/* QQ */
		.state($amd.route({
			name: 'home.qq', 
			url: '/qq',
			templateUrl: 'views/qq/index.html',
			controllerUrl: 'views/qq/index.js',
			css: ['views/qq/index.css']
		}))
		/* WIFI */
		.state($amd.route({
			name: 'home.wifi', 
			url: '/wifi',
			templateUrl: 'views/wifi/index.html',
			controllerUrl: 'views/wifi/index.js',
			css: ['views/wifi/index.css']
		}))
		/* 淘宝 */
		.state($amd.route({
			name: 'home.taobao', 
			url: '/taobao',
			templateUrl: 'views/taobao/index.html',
			controllerUrl: 'views/taobao/index.js',
			css: ['views/taobao/index.css']
		}))
		/* 微博 */
		.state($amd.route({
			name: 'home.sina', 
			url: '/sina',
			templateUrl: 'views/sina/index.html',
			controllerUrl: 'views/sina/index.js',
			css: ['views/sina/index.css']
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
