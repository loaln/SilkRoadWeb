window.onload=function(){
	
	//此处代码有待优化
	var oImg1=document.getElementById('img1');
	oImg1.onmouseover=function()
	{
		this.className = "";
	};
	oImg1.onmouseout=function()
	{
		this.className = "display";
	};
	var oImg2=document.getElementById('img2');
	oImg2.onmouseover=function()
	{
		this.className = "";
	};
	oImg2.onmouseout=function()
	{
		this.className = "display";
	};
	var oImg3=document.getElementById('img3');
	oImg3.onmouseover=function()
	{
		this.className = "";
	};
	oImg3.onmouseout=function()
	{
		this.className = "display";
	};
	var oImg4=document.getElementById('img4');
	oImg4.onmouseover=function()
	{
		this.className = "";
	};
	oImg4.onmouseout=function()
	{
		this.className = "display";
	};
	var oImg5=document.getElementById('img5');
	oImg5.onmouseover=function()
	{
		this.className = "";
	};
	oImg5.onmouseout=function()
	{
		this.className = "display";
	};
	var oImg6=document.getElementById('img6');
	oImg6.onmouseover=function()
	{
		this.className = "";
	};
	oImg6.onmouseout=function()
	{
		this.className = "display";
	};
	var oImg7=document.getElementById('img7');
	oImg7.onmouseover=function()
	{
		this.className = "";
	};
	oImg7.onmouseout=function()
	{
		this.className = "display";
	};
	var oImg8=document.getElementById('img8');
	oImg8.onmouseover=function()
	{
		this.className = "";
	};
	oImg8.onmouseout=function()
	{
		this.className = "display";
	};

	//鼠标滑过事件，nav摇动
    $("#nav img").mouseover(function(){
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated zoomIn').one(animationEnd,function () {
            $('#nav img').removeClass('animated zoomIn');
        });
    });
}

$(document).ready(function(){
	
	//一进来的小图片切大图片
	$(".sp").click(function(){
        var n = $(".sp").index(this);
        var a;
		a=$(this).html();
		$('#big-pic').empty();
		$('#big-pic').append(a);
	});
	
	//a标签页面滑动效果
	$('a').click(function(){
		$('html,body').animate({
        	scrollTop: $( $(this).attr('href') ).offset().top
		}, 700);
	return false; 
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
				area: ['210px','435px'],
				offset:'r',
				content: $('#menu')
			}); 
		});
	});
	
	//图片点击弹出层，进行图片切换
	layui.use('layer', function(){
		layer.photos({
			photos: '#layer-photos-demo1',
			shade:[0.6,'#000'],
			anim: 0 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
		}); 
		layer.photos({
			photos: '#layer-photos-demo2',
			shade:[0.6,'#000'],
			anim: 1 
		});
		layer.photos({
			photos: '#layer-photos-demo3',
			shade:[0.6,'#000'],
			anim: 2
		});
		layer.photos({
			photos: '#layer-photos-demo4',
			shade:[0.6,'#000'],
			anim: 3
		});
		layer.photos({
			photos: '#layer-photos-demo5',
			shade:[0.6,'#000'],
			anim: 4
		});
		layer.photos({
			photos: '#layer-photos-demo6',
			shade:[0.6,'#000'],
			anim: 5
		});
		layer.photos({
			photos: '#layer-photos-demo7',
			shade:[0.6,'#000'],
			anim: 0
		});
		layer.photos({
			photos: '#layer-photos-demo8',
			shade:[0.6,'#000'],
			anim: 1
		});
		layer.photos({
			photos: '#layer-photos-demo9',
			shade:[0.6,'000'],
			anim: 2
		});
		layer.photos({
			photos: '#layer-photos-demo10',
			shade:[0.6,'#000'],
			anim: 3
		});
		layer.photos({
			photos: '#layer-photos-demo11',
			shade:[0.6,'#000'],
			anim: 4
		});
		layer.photos({
			photos: '#layer-photos-demo12',
			shade:[0.6,'#000'],
			anim: 5
		});
		layer.photos({
			photos: '#layer-photos-demo13',
			shade:[0.6,'#000'],
			anim: 0
		});
		layer.photos({
			photos: '#layer-photos-demo14',
			shade:[0.6,'#000'],
			anim: 1
		});
		layer.photos({
			photos: '#layer-photos-demo15',
			shade:[0.6,'#000'],
			anim: 2
		});
		layer.photos({
			photos: '#layer-photos-demo16',
			shade:[0.6,'#000'],
			anim: 3
		});
		layer.photos({
			photos: '#layer-photos-demo17',
			shade:[0.6,'#000'],
			anim: 4
		});
		layer.photos({
			photos: '#layer-photos-demo18',
			shade:[0.6,'#000'],
			anim: 5
		});
	});
});