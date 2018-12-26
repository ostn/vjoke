/**
 * Created by shenyang on 2018/10/24.
 */
define(['angular', 'route-manager', 'echarts', 'setting', 'angular-animate', 'anim-in-out', 'macarons'], function(angular, $manager, echarts, Setting) {
	var $App = angular.module('app', ['ngAnimate', 'ui.router', 'anim-in-out', 'door3.css']);
		/* 配置按需加载contrlloer */
		$App.config(['$controllerProvider', function($controllerProvider) {
			$App.controller = $controllerProvider.register;
		}])
		/* 配置路由文件 */
		.config($manager)
		.run(['$rootScope', '$state', '$window', function($rootScope, $state, $window) {
			// $rootScope下可以定义全局方法和全局变量，以下定义了页面跳转的公共方法
			$rootScope.go = function(path, param) {
				$state.go(path, param);
			}
		}])
		/* $provider注册一个常量配置URL */
		.constant('$url', Setting)
		.directive('pie', function($parse, $window) {
			return {
				scope: {
					conf: "=",
					height: "@",
					width: "@"
				},
				restrict: 'EA',
				replace: true,
				link: function(scope, element, attrs, ctrl) {
					$(element).css({
						display: "block",
						width: scope.width || "100%",
						height: scope.height || "210"
					})
					
					var myChart = echarts.init(element[0], "macarons");

					$window.addEventListener("resize", function() {
						myChart.resize();
					});

					myChart.on("click", function(params) {
						scope.conf.callback(params)
					})
					scope.$watch("conf", function(n, o) {
						if (typeof(n) == "object") {
							myChart.setOption({
								title: {
									text: '播出机构播出情况分部',
									x: 'left'
								},
								tooltip: {
									trigger: 'item',
									formatter: "{b} : {c} ({d}%)"
								},
								legend: {
									orient: 'vertical',
									left: 'right',
									data: scope.conf.legend
								},
								series: [{
									type: 'pie',
									radius: '55%',
									center: ['50%', '60%'],
									label: {
										normal: {
											show: true,
											formatter: '{b}: {c}({d}%)'
										}
									},
									labelLine: {
										length: 50,
										length2: 40
									},
									data: scope.conf.data,
									itemStyle: {
										emphasis: {
											shadowBlur: 10,
											shadowOffsetX: 0,
											shadowColor: 'rgba(0, 0, 0, 0.5)'
										}
									}
								}]
							});
						}
					})

				}
			};
		})
	// window.app = $App;
	return $App;
});
