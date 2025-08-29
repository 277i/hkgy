/**
 * @author: xiangliang.zeng
 * @description:
 * @Date: 2017/1/4 11:38
 * @Last Modified by:   xiangliang.zeng
 */
; (function () {

	if (!loader51._isReady) {
		loader51.$on("ready", function () {
			onDomReady();
			console.log('-ready-');
		})
	} else {
		onDomReady();
	}

	if (!loader51._isLoaded) {
		loader51.$on("loaded", function () {
			onLoaded();
			console.log('-loaded-');
			$('.warp').show()
		});
	} else {
		onLoaded();
	}


	$(".enter").click(function(){
		$('.warp').hide()
		$('.page').show()
	})


	// 类似Jquery的$(function(){});
	function onDomReady() {
		// musicSwitch();
		console.log('DOM is ready');
	}
	// 当loading页面关闭时执行的函数
	function onLoaded() {
		removeTouchMove();
		console.log('Loaded');
		init();
	}

	function init() {
		// 实例化swiper对象
		var mySwiper = new Swiper('.swiper-container', {
			//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
			direction: 'vertical',
			//将hashnav设置为true，并在每个slide处增加data-hash属性，可在当前页刷新。
			hashnav: true,
			on: {
				init: function () {
					swiperAnimateCache(this); //隐藏动画元素
					swiperAnimate(this); //初始化完成开始动画
					$('.swiper-slide').scrollTop(0);
				},
				slideChangeTransitionEnd: function () {
					swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
					$('.swiper-slide').scrollTop(0);
				},
			},
		});



		// 引导页的enter键点击划入第二页
		$('#s1 .enter img').on('click', function (event) {
			mySwiper.slideTo(1, 1000, true);
		});

		// 需要局部滚动的页面，阻止事件冒泡 -- 阻止swiper滑动
		$('.info').on('touchmove', function () {
			event.stopPropagation();
		});

		/***************************************** 地图 ***************************************************/
		//添加公司地址位置，修改公司地址方法如下：
		// http://api.map.baidu.com/lbsapi/creatmap/index.html，该地址是百度地图生成器，
		//打开网址后，将公司地址输入，获取到横纵坐标，请“coord=25.015643,102.753885”替换为获取到的横纵坐标，title替换为公司名称
		// $('.map').click(function() {
		//     location.href = 'http://api.map.baidu.com/marker?location=31.184249,121.416137&title=延锋伟世通电子科技（上海）有限公司&content=徐汇区钦州北路1001号&output=html';
		// });

		$(".job p").click(function () {
			var dsn = $(this).next("div").css("display");
			if (dsn == "none") {
				$(this).next("div").slideDown();
			} else {
				$(this).next("div").slideUp();
			}
		})


	}


	// 移除默认事件及阻止冒泡
	function removeDefaultEvt(e) {
		e.preventDefault();
	}
	// 移除默认document的touchmove，针对苹果手机
	function removeTouchMove() {
		document.body.addEventListener('touchmove', removeDefaultEvt, false);
	}
})();
