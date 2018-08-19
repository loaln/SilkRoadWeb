$(document).ready(function(){
	
    //页面淡入效果
    $("body").css("display","none");
    $("body").fadeIn("slow");
    $("a[target],a[href*='javascript'],a.lightbox-processed,a[href*='#']").addClass("speciallinks");
    $("a:not(.speciallinks)").click(function(){
        $("body").fadeOut("slow");
        $("object,embed").css("visibility","hidden");
    });

    //鼠标滑过事件，nav摇动
    $(".nright img").mouseover(function(){
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated shake').one(animationEnd,function () {
            $('.nright img').removeClass('animated shake');
        });
    });

    //text切换
    $(function(){
        $(".bottom>div").addClass('textHide');
        $("#HJL-text").addClass('textActive');
        $("#HJL-icon").addClass('iconActive');
        $("#menberIcon div").click(function(){
            var n = $("#menberIcon div").index(this);

            $(".top>div").removeClass('iconActive');
            $(this).addClass('iconActive');

            $(".bottom>div").index(this);
            $(".bottom>div").removeClass('textActive');
            $(".bottom>div:eq("+n+")").addClass('textActive');
        })
    })
});