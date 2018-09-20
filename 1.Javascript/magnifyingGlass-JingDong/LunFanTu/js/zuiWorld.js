// 轮播图:num表示第几张图，y表示第几个指示条
//var是JavaScript语言中用来定义变量的关键字
//JS语言是一门弱类型的语言
var num = 0;
var y = 0;
var flag = false;
var hello;//hello表示手动点击到某个指示条的位置的下标
//querySelector是document对象里面已经定义好的方法
//作用是：query查找   Selector：选择器
//通过传统的方式找到的标签对象是【JS对象】
var shuff_ul = document.querySelector('.shuff_tu ul')
//ols是一个数组
var ols = document.querySelectorAll('.big_screen ol li')
//通过JS的方式设置“红色”
ols[0].style.background = "#FF7467";
// 变换图片的方法
//changImg是函数名
function changImg(){
	//如果hello存在，即说明存在手动点击
	if(flag){
		//那么之后轮播图的位置需要调整，减1是因为马上要num++
		num = hello - 1;
		//指示条的位置也需要调整，减1是因为马上要y++
		y = hello - 1;
		//把手动点击置空，否则每次都是这个值作为num值
		//hello = null;
		// flag标记要还原
		flag = false;
	}
	// 这个判断要写在num++之前，否则会有Bug
	if(num == 3){
		num = -1;
	}
	if(y == 3){
		y = -1;
	}
	// 变量自增
	num++;//1
	y++;
	console.log("num111 = " + num);
	console.log("y111 = " + y);
	//是通过JS的方式设置CSS样式
	//shuff_ul是【传统的JS对象】
	shuff_ul.style.left = -num * 100 + "%";
	/*if(y == 4){
		y = 0;
	}*/
	for(var i = 0;i < ols.length; i++){
		ols[i].style.background = "#000000"
	}
	ols[y].style.background = "#ff7467"
}
//在面向对象的编程语言里面，函数、方法都是同一个概念
//Java、C++、C#(sharp)、Obejective-C、JavaScript
// setInterval()是启动定时器的方法，可以反复定时
// setTimeout()是启动定时器的方法，只会定时一次
// 参数1：要执行的函数名；参数2：时间，单位是ms
//返回值imgTime表示我们启动的定时器
var imgTime = setInterval(changImg, 2000)
//鼠标离开后，轮播图继续轮播
function continueImg(){
	clearInterval(imgTime)
	// 重新启动定时器
	imgTime = setInterval(changImg, 2000)
}
//liEles是个数组，数组默认有length属性
//数组的下标是一律都是从0开始的
var liEles = document.querySelectorAll('.shuff_tu>ul>li')
// 【左】轮播到上一张图
function lastMove(){
	num--;
	y--;
	if(num < 0){
		num = liEles.length - 1;
	}
	console.log("num = " + num)
	if(y < 0){
		y = ols.length - 1
	}
	shuff_ul.style.left = -num * 100 + "%";
	for(var i = 0;i < ols.length; i ++){
		ols[i].style.background = "#000000"
	}
	ols[y].style.background = "#ff7467"
}
//鼠标放到轮播图上的时候，轮播图暂停
$('.big_screen').mouseover(function(){
	// clearInterval()方法是JavaScript语言中固有的一个【取消定时器】的方法
	//参数表示定时器
	clearInterval(imgTime);
})
//鼠标离开后，轮播图继续轮播
$('.big_screen').mouseout(function(){
	// 继续轮播
	continueImg();
})
//点击左键，向左轮播
$('#left').click(function(){
	lastMove();
	continueImg();
})
//点击右键，向右轮播
$('#right').click(function(){
	changImg();
	continueImg();
})
function delay2s(){
	
}
//轮播图上的指示条被点击的时候
//通过jQuery库找到的对象是【jQuery对象】
//JS对象和jQuery对象是完全不同的两种对象，所拥有的方法也不一样
var ols = $('.big_screen ol li');
var $banner_ul = $('.shuff_tu ul');
ols.click(function(){
	for(var i = 0;i < ols.length; i++){
		ols[i].style.background = "#000000"
	}
	$(this).css('background','#ff7467');
	$($banner_ul).css('left',-$(this).index() * 100 + '%');
	//获得手动点击的下标值
	hello = $(this).index();
	//一旦有点击，便设置为true
	flag = true;
	console.log("hello = " + hello);
	//如果鼠标继续放在指示条上，那么执行下面的函数
	continueImg();
	//如果鼠标离开了指示条，那么执行
	//$('.big_screen').mouseout(function(){ 部分代码
})
