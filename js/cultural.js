$(document).ready(function(){
	
	//a标签页面滑动效果
	$('a').click(function(){
		$('html,body').animate({
        	scrollTop: $( $(this).attr('href') ).offset().top
		}, 700);
	return false; 
	});
	
	//一进来的小图片切大图片
	$(".sp1").click(function(){
        var n = $(".sp1").index(this);
        var a;
		a=$(this).html();
		$('#big-pic').empty();
		$('#big-pic').append(a);
	});
	
	//目录弹出层
    $("#m").click(function(){
		layui.use('layer', function(){
			var layer = layui.layer;
			layer.open({
				type: 1,
	  			title: "目录",
				closeBtn: 1,
				shade: 0,
				skin: 'layui-bg-cyan',
				area: ['170px','260px'],
				offset:'r',
				content: $('#menu')
			}); 
		});
	});
	
	//top键到达一定的位置再出现
	$(document).scroll(function() {
		var scrollTop=$(document).scrollTop();
		var currentTop=parseInt(scrollTop);
		if(currentTop>10){
			$('#totop').show();
		}else{
			$('#totop').hide();
		}
	});
	
	$(".sp2 img").click(function(){
		var n = $(".sp2 img").index(this);
		var a;
		console.log(n);//根据第几个切换不同的内容
		if(n==0){
			a='http://player.youku.com/player.php/sid/XNjQ3MDYzMjY4/v.swf';
		}else if(n==1){
			a='http://player.youku.com/player.php/sid/XMzUzNDg2MjczNg==/v.swf';
		}else if(n==2){
			a='https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=x0677524sl0&auto=0"';
		}else if(n==3){
			a='https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=j050888am0l&auto=0';
		}else if(n==4){
			a='http://player.youku.com/player.php/sid/XMzMyNzU1NTg0MA==/v.swf';
		}else if(n==5){
			a='http://player.youku.com/player.php/sid/XNjQ3MDYzMjY4/v.swf';
		}
		layui.use('layer', function(){
			layer.open({
				type: 2,
				title: false,
				area: ['800px', '500px'],
				shade: 0.8,
				closeBtn: 0,
				shadeClose: true,
				content: a
			});
		});
	});
	
	//图片弹出div，进行切换
	layui.use('layer', function(){
		layer.photos({
			photos: '#pic3-2',
			shade:[0.6,'#000'],
			anim: 0 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
		}); 
		layer.photos({
			photos: '#pic4-3',
			shade:[0.6,'#000'],
			anim: 1 
		});
	});
	
	//图片弹出div，里面是外接网页
	$(".sp7").click(function(){
		layui.use('layer', function(){
			var layer = layui.layer;
			layer.open({
				type: 2,
				title:'推荐',
				content: 'https://search.bilibili.com/all?keyword=%E9%9B%85%E5%85%B8&from_source=banner_search',
				area: ['800px', '500px'],
				maxmin: true
			}); 
		});
	});

	//鼠标滑过事件，nav摇动
    $("#nav img").mouseover(function(){
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated tada').one(animationEnd,function () {
            $('#nav img').removeClass('animated tada');
        });
    });
});