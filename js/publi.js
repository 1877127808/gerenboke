/*
* @Author: qing
* @Date:   2019-08-10 22:19:36
* @Last Modified by:   qing
* @Last Modified time: 2019-08-16 11:01:02
*/
//根据窗口大小刷新
// $(window).resize(function(event) {
// 	location.reload()
// });

//小屏幕导航菜单按钮
var n = 0;

$("#img").click(function(){
	if(n < 1){
		$("#navmin").css({"top":"50px","transition":"1s"});
		n++;
	}else if(n > 0){
		$("#navmin").css({"top":"-300px","transition":"1s"});
		n--;
	}else{
		n = 0;
		$("#navmin").css({"top":"50px","transition":"1s"});
		}
	})

$(window).resize(function(){           // 实时判断窗口大小
    var Width = $(window).width();    // 获取屏幕可见区域大小
    console.log(Width);
    if(Width>753){
    	$('#navmin').css({"top":"-300px","transition":""});
    	n = 0;
    }
})

//回到顶部的按钮
var Tops = $(window).scrollTop();	//获取滚动条距离顶部的垂直高度
	if(Tops>100){
		$("#gotop").css("display","block");
	}else{
		$("#gotop").css("display","none");
	};

$(window).scroll(function(){               //滑动一次获取一次滚动条距离顶部的垂直高度
	var Tops = $(window).scrollTop();	//获取滚动条距离顶部的垂直高度
	if(Tops>100){
		$("#gotop").css("display","block");
	}else{
		$("#gotop").css("display","none");
	};
});

//模态框登录方式切换
$(".btnSpan").click(function(){
	var i = 0;
	if(i<1){
		$(".moda .one").css("display","block");
		$(".moda .two").css("display","none");
	};
});

$(".btnSpans").click(function(){
	var i = 0;
	if(i<1){
		$(".moda .one").css("display","none");
		$(".moda .two").css("display","block");
	};
});

// 表单验证

$("#modaBtn2").click(function(){
	var btn1 = $("#modaBtn1").val();
	console.log(btn1)
	var rel = /^[1-9]{1}[0-9]\d{3,8}$/;
	var relbtn = rel.test(btn1);
	if(relbtn){
		return true;
	}else{
		alert("请输入5~10位数字的用户名！");
		return false;
	};
})
$(".button").click(function(){
	var btn2 = $("#modaBtn2").val();
	console.log(btn2)
	var res = /^[a-z]{1}[0-9,.]{9}$/i;
	var resbtn = res.test(btn2);
	if(resbtn){
		return true;
	}else{
		alert("请输入字母开头的10位数的密码！");
		return false;
	};
})
