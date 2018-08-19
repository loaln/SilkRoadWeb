//JavaScript Document
window.onload=function()
{
	//此处代码有待优化，鼠标滑过，另外一张图片淡出效果
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

	// menu部分
	var menuRight = document.getElementById( 'cbp-spmenu-s2' );
    var showRight = document.getElementById( 'showRight' );
    var oHamburger = document.getElementById('Hamburger');
    var mask=document.getElementById('mask');

    var oTec = document.getElementById('tec');
    var oHumanisticSpirit = document.getElementById('Humanistic-spirit');
    var oHistory = document.getElementById('history');
    var oNowadays = document.getElementById('nowadays');

    showRight.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( menuRight, 'cbp-spmenu-open' );
        classie.toggle(oHamburger,'is-active');
        classie.toggle(mask,'mask-open');
        classie.toggle(oTec,'navOpen');
        classie.toggle(oHumanisticSpirit,'navOpen');
        classie.toggle(oHistory,'navOpen');
        classie.toggle(oNowadays,'navOpen');
    };
    // 中亚图片轮播
    $('#MidAsianImgSlides').unslider();

};

$(document).ready(function(){
	
	//鼠标滑过事件，nav摇动
	$(".tright img").mouseover(function(){
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).addClass('animated swing').one(animationEnd,function () {
			$('.tright img').removeClass('animated swing');
		});
	});
	
	//书签标签带滑动效果
	$('a').click(function(){
		$('html,body').animate({
        	scrollTop: $( $(this).attr('href') ).offset().top
		}, 700);
	return false; 
	});

    //导航栏hover显示预览
    $('#nav-tec').mouseover(function () {
        $('#tec').addClass('navContent-hover');
    });
    $('#nav-tec').mouseout(function () {
        $('#tec').removeClass('navContent-hover');
    });
    $('#nav-Humanistic-spirit').mouseover(function () {
        $('#Humanistic-spirit').addClass('navContent-hover');
    });
    $('#nav-Humanistic-spirit').mouseout(function () {
        $('#Humanistic-spirit').removeClass('navContent-hover');
    });
    $('#nav-history').mouseover(function () {
        $('#history').addClass('navContent-hover');
    });
    $('#nav-history').mouseout(function () {
        $('#history').removeClass('navContent-hover');
    });
    $('#nav-nowadays').mouseover(function () {
        $('#nowadays').addClass('navContent-hover');
    });
    $('#nav-nowadays').mouseout(function () {
        $('#nowadays').removeClass('navContent-hover');
    });
	
	//鼠标滚轮切换div
	$('.panel').css({'height': $(window).height()});

	$.scrollify({
		section: '.panel',
		scrollbars: false,
		easing: "easeInQuart",
		scrollSpeed: 700
	});

	//导航栏地区自动切换，top的显示与隐藏
	$(document).scroll(function() {
    	var Height=$(window).height();
		var scrollTop=$(document).scrollTop();
		var currentTop=parseInt(scrollTop);
    	$('#leftNav button').removeClass('nav__item--current');
        if(currentTop==0)
        {
            $( '#leftNavMain').addClass('nav__item--current');
            $('.t').hide();
        }
        if(currentTop==Height)
        {
            $( '#leftNavChina').addClass('nav__item--current');
            $('.t').fadeIn();
        }
        if(currentTop==Height*2)
        {
            $( '#leftNavMidAsian').addClass('nav__item--current');
            $('.t').fadeIn();
        }
        if(currentTop==Height*3)
        {
            $( '#leftNavWestAsian').addClass('nav__item--current');
            $('.t').fadeIn();
        }
        if(currentTop==Height*4)
        {
            $( '#leftNavEurope').addClass('nav__item--current');
            $('.t').fadeIn();
        }
    });

    //中国视频区切换
    $("#vedioImgOne").mouseover(function(){
        $("#vedioImgOne").removeClass('ChinaDisplay');
    });
    $("#vedioImgOne").mouseout(function () {
        $("#vedioImgOne").addClass('ChinaDisplay');
    });
    $("#vedioImgTwo").mouseover(function(){
        $("#vedioImgTwo").removeClass('ChinaDisplay');
    });
    $("#vedioImgTwo").mouseout(function () {
        $("#vedioImgTwo").addClass('ChinaDisplay');
    });
    $("#vedioImgThree").mouseover(function(){
        $("#vedioImgThree").removeClass('ChinaDisplay');
    });
    $("#vedioImgThree").mouseout(function () {
        $("#vedioImgThree").addClass('ChinaDisplay');
    });
    $(function(){
        $("#ChinaTab>div").hide();
        $("#ChinaTab>div:eq(0)").show();
        $("#vedioImgOne").addClass('Active');

        $(".Cright div").click(function(){
            var n = $(".Cright div").index(this);

            $(".vedioImg>img").removeClass('Active');
            $(this).find("img:eq(1)").addClass('Active');

            $("#ChinaTab>div").index(this);
            $("#ChinaTab>div").hide();
            $("#ChinaTab>div:eq("+n+")").show();
        })
    });

    // 西亚图片轮播
    $('.slider_four_in_line').EasySlides({
        'autoplay': true,
        'show': 5
        // 'touchevents':false
    });

    // 欧洲图片文字slide
    $(function(){
        $("#img-slideTo").powerSlider({
            handle:"slideTo",
            delayTime:4000
        });
    });

});

	