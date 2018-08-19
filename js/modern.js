window.onload=function(){
	
	//轮播图的切换
	var indexs=0;
	var xh=null;
	var pics=document.getElementById("pictures");
	var items=pics.getElementsByTagName("li");
	var circles=document.getElementById("index");
	var nums=circles.getElementsByTagName("li");
	//getElementsByTagName()方法返回元素的顺序是它们在文档中的顺序
	var len=items.length;
	var leng=nums.length;
//	console.log(len);
//	console.log(leng);
	//调用自动播放函数
	xh=setInterval(auto,4000);
	// 遍历所有圆点导航实现划过切换至对应的图片
	for( var i =0; i<len; i++ ){
		(function(j){
			nums[j].onclick = function(){
				play(j);
				index = j;
			}
		})(i);
	}
	//播放第几页函数
	function play(num){
		hideItems();
		items[num].style.opacity=1;
		nums[num].className='on';
	}
	//自动播放函数
	function auto(){
		play(indexs);
//		console.log(indexs);
		if(indexs>len-2){
		indexs=0;
		}else{
			indexs++;
		}
	}
	//对图片进行初始化
	function hideItems(){
		for(var i=0;i<len;i++){
			items[i].style.opacity=0;
		}
		for(var j=0;j<leng;j++){
			if(nums[j].className=='on'){
				nums[j].className='';
			}
		}
	}


	//top键滑动效果
	$('a').click(function(){
		$('html,body').animate({
        	scrollTop: $( $(this).attr('href') ).offset().top
		}, 600);
	return false; 
	});
	
	//页面到达一定高度时，导航栏滑下
	$(document).scroll(function(){   
		var Height=$(window).height();
		var distance = $(document).scrollTop();  //获取滚动条初始高度的值 ：0
//		console.log("窗口高度：",Height);
//		console.log("滚动条实时高度：",distance); //打印滚动条不同高度的位置的值
		if(distance>=Height-50){
			$("#nav").slideDown();
		}else{
			$("#nav").slideUp();
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
				area: ['170px','170px'],
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
			$('#public').show();
		}else{
			$('#public').hide();
		}
	});
	
	//点击图片，出现弹出层,图片加介绍
    $(".pleft2").click(function(){
        var n = $(".pleft2").index(this);
//		console.log(n);//根据第几个切换不同的内容
		if(n==0){
			$('#pics').html('<img src="../image/modern/1.jpg" width="100%" height="100%">');
			$('#words').html('&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'“一带一路”（The Belt and Road，缩写B&R）是“丝绸之路经济带”和“21世纪海上丝绸之路”的简称，2013年9月和10月由中国国家主席习近平分别提出建设“新丝绸之路经济带”和“21世纪海上丝绸之路”的合作倡议。' +'<br>' +'<br>' +
                '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'它将充分依靠中国与有关国家既有的双多边机制，借助既有的、行之有效的区域合作平台，一带一路旨在借用古代丝绸之路的历史符号，高举和平发展的旗帜，积极发展与沿线国家的经济合作伙伴关系，共同打造政治互信、经济融合、文化包容的利益共同体、命运共同体和责任共同体。' +'<br>' +'<br>' +
                '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'2015年3月28日，国家发展改革委、外交部、商务部联合发布了《推动共建丝绸之路经济带和21世纪海上丝绸之路的愿景与行动》。' +'<br>' +'<br>' +
                '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'“一带一路"经济区开放后，承包工程项目突破3000个。2015年，中国国企业共对“一带一路”相关的49个国家进行了直接投资，投资额同比增长18.2%。2015年，我国承接“一带一路”相关国家服务外包合同金额178.3亿美元，执行金额121.5亿美元，同比分别增长42.6%和23.45%。2016年6月底，中欧班列累计开行1881列，其中回程502列，实现进出口贸易总额170亿美元。2016年6月起，中欧班列穿上了统一的“制服”，深蓝色的集装箱格外醒目，品牌标志以红、黑为主色调，以奔驰的列车和飘扬的丝绸为造型，成为丝绸之路经济带蓬勃发展的最好代言与象征。 ');
		}else if(n==1){
			$('#pics').html('<img src="../image/modern/2.jpg" width="100%" height="100%">');
			$('#words').html('·蒙内铁路'+'<br>' +
                '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'肯尼亚是中国“一带一路”战略在非洲唯一的支点，是新丝路建设中获得中国资金援助最多的国家。' +
                '2014年5月李克强总理访问肯尼亚期间，中肯签署了关于蒙巴萨-内罗毕铁路相关合作协议，蒙内铁路是肯尼亚百年来建设的首条新铁路，是东非铁路网的咽喉，也是东非次区域互联互通重大项目，规划全长2700公里，预计总造价250亿美元。' +
                '中国企业也携手通用电气开拓EPC市场的力度不断加大，比如2015年中国机械工业集团在其承建的肯尼亚基佩托风电项目中采用60台通用1.7-103风机。' +'<br>'+
            '·中匈协议'+'<br>'  +
                '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'2015年6月6日，正在匈牙利进行正式访问的外交部部长王毅，在布达佩斯同匈牙利外交与对外经济部部长西亚尔托签署了《中华人民共和国政府和匈牙利政府关于共同推进丝绸之路经济带和21世纪海上丝绸之路建设的谅解备忘录》。这是中国同欧洲国家签署的第一个此类合作文件。' +'<br>'+
            '·卫星通信' +'<br>'+
                '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'为保障“一带一路”通信卫星信号无障碍，国内的相关企业和政府机构已经对“一带一路”的卫星发射进行了规划和研究，未来三年到五年内，将发射多颗通信卫星，与此同时，“一带一路”途经国家的通信信号也将逐步实现全覆盖。从而在通信领域为“一带一路”铺平道路。 ');
		}else if(n==2){
			$('#pics').html('<img src="../image/modern/3.jpg" width="100%" height="100%">');
			$('#words').html('1、“沙漠丝路”' +'<br>' +
                '沙漠丝路的起点是西安、洛阳两地，途经河西走廊，直至为中亚、欧洲、北非；' +'<br>' +'<br>' +
                '2、“草原丝路”' +'<br>' +
                '草原丝路的起点是内蒙古、燕山沿线，途经蒙古草原南俄草原，直至为中亚、西亚、地中海沿岸；' +'<br>' +'<br>' +
                '3、海上丝路' +'<br>' +
                '海上丝路的起点是泉州、广州、宁波，途经东海、南海、印度洋，直至为日本、朝鲜、东南亚、南亚、东非；\n' +'<br>' +'<br>' +
                '4、“茶马古道”' +'<br>' +
                '茶马古道起点是四川、云南、西藏，途经西藏、南亚、西亚，直至印度、尼泊尔、西亚、西非。');
		}else if(n==3){
			$('#pics').html('<img src="../image/modern/4.jpg" width="100%" height="100%">');
			$('#words').html('&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'2014年博鳌亚洲论坛年会开幕大会上，李克强总理以“共同开创亚洲发展的新未来” 为题发表演讲，全面阐述了中国的亚洲合作政策，并特别强调要推进“一带一路”的建设。' +'<br>' +'<br>' +
                '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'“一带一路”是指“丝绸之路经济带”和“21世纪海上丝绸之路” ，它将充分依靠中国与有关国家既有的双多边机制，借助既有的、行之有效的区域合作平台。“一带一路”的建设不仅不会与上海合作组织、欧亚经济联盟、中国—东盟（10+1）等既有合作机制产生重叠或竞争，还会为这些机制注入新的内涵和活力。' +'<br>' +'<br>' +
                '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'国家发展改革委、外交部、商务部联合发布《推动共建丝绸之路经济带和21世纪海上丝绸之路的愿景与行动》，提出：发挥新疆独特的区位优势和向西开放重要窗口作用，深化与中亚、南亚、西亚等国家交流合作，形成丝绸之路经济带上重要的交通枢纽、商贸物流和文化科教中心，打造丝绸之路经济带核心区。' +
                '利用长三角、珠三角、海峡西岸、环渤海等经济区开放程度高、经济实力强、辐射带动作用大的优势，加快推进中国（上海）自由贸易试验区建设，支持福建建设21世纪海上丝绸之路核心区。充分发挥深圳前海、广州南沙、珠海横琴、福建平潭等开放合作区作用，深化与港澳台合作，打造粤港澳大湾区。');
		}
		layui.use('layer', function(){
			var layer = layui.layer;
			layer.open({
				type: 1,
	  			title: false,
				closeBtn: 0,
				shadeClose: true,
				skin: 'layui-bg-cyan',
				area: ['1000px','800px'],
				content: $('#picdemo')
			}); 
		});
	});

    //鼠标滑过事件，nav摇动
    $("#nav2 img").mouseover(function(){
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated bounceIn').one(animationEnd,function () {
            $('#nav2 img').removeClass('animated bounceIn');
        });
    });

    layui.use('element', function(){
        var element = layui.element;
    });

    //相关网站图片鼠标事件
    $("#e1-imgOne").mouseover(function(){
        $("#e1-imgOne").removeClass('display');
    });
    $("#e1-imgOne").mouseout(function () {
        $("#e1-imgOne").addClass('display');
    });
    $("#e1-imgTwo").mouseover(function(){
        $("#e1-imgTwo").removeClass('display');
    });
    $("#e1-imgTwo").mouseout(function () {
        $("#e1-imgTwo").addClass('display');
    });
    $("#e1-imgThree").mouseover(function(){
        $("#e1-imgThree").removeClass('display');
    });
    $("#e1-imgThree").mouseout(function () {
        $("#e1-imgThree").addClass('display');
    });
    $("#e1-imgFour").mouseover(function(){
        $("#e1-imgFour").removeClass('display');
    });
    $("#e1-imgFour").mouseout(function () {
        $("#e1-imgFour").addClass('display');
    });

}
