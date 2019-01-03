define(['setting'], function(Setting) {
	return function ($rootScope, $scope) {
		
		$scope.pageClass = 'page-home';
		
		$scope.hover = function(e) {
			var oevent = e || event;
			var aimg = document.getElementsByTagName('img')
			var odiv = document.getElementById('menu-bar')
			for (var i = 0; i < aimg.length; i++) {
				var x = aimg[i].offsetLeft + aimg[i].offsetWidth / 2
				var y = aimg[i].offsetTop + odiv.offsetTop + aimg[i].offsetHeight / 2
				var a = x - oevent.clientX
				var b = y - oevent.clientY
				var dis = parseInt(Math.sqrt(a * a + b * b))
				var scale = 1 - dis / 200
				if (scale < 0.5) {
					scale = 0.5
				}
				aimg[i].width = scale * 128
			}
		}
		
		$scope.menus = [{
				name: 'music',
				label: '音乐',
				uri: Setting.imageUrl + 'menu/music.png'
			},
			{
				name: 'charts',
				label: '统计',
				uri: Setting.imageUrl + 'menu/cloud.png'
			},
			{
				name: 'video',
				label: '视频',
				uri: Setting.imageUrl + 'menu/video.png'
			},
			{
				name: 'files',
				label: '文档',
				uri: Setting.imageUrl + 'menu/files.png'
			},
			{
				name: 'wechat',
				label: '微信',
				uri: Setting.imageUrl + 'menu/wechat.png'
			},
			{
				name: 'qq',
				label: 'QQ',
				uri: Setting.imageUrl + 'menu/qq.png'
			},
			{
				name: 'wifi',
				label: 'WIFI',
				uri: Setting.imageUrl + 'menu/wifi.png'
			},
			{
				name: 'taobao',
				label: '淘宝',
				uri: Setting.imageUrl + 'menu/taobao.png'
			},
			{
				name: 'sina',
				label: '微博',
				uri: Setting.imageUrl + 'menu/sina.png'
			},
			{
				name: 'profile',
				label: '个人信息',
				uri: Setting.imageUrl + 'menu/settings.png'
			},
		];

		$scope.toSubPage = function(name) {
			var param = {};
			if (name == 'video') {
				param = {
					id: 1
				};
			}
			$rootScope.go('home.' + name, param)
		}

	}
});
