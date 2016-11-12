/**
 * Created by 嬌嬌 on 2016/10/25.
 */
$(function () {
    $(".bag").click(function (e) {
        e.stopPropagation();//处理事件流
        $(".bag-inner").toggleClass("active");
        $(".sanjiao").toggleClass("active");
    });
    $(".bag-inner").click(function (e) {
        e.stopPropagation();
        $(".bag-inner").removeClass("active");
        $(".sanjiao").removeClass("active");
    });
    $("body").click(function () {
        $(".bag-inner").removeClass("active");
        $(".sanjiao").removeClass("active");
    });

    //搜索按钮
    $(".search").click(function () {
        $(".closebtn").addClass("active");
        $(".top-nav:not(.top-nav:first)").transition({scale:0.5,opacity:0})
        setTimeout(function () {
            $(".top-nav:not(.top-nav:first)").hide();
            $(".searchlist").show();
            $(".input-box").show().transition({x:0,opacity:1},500);
            $(".searchlist a").each(function (index) {
                $(this).transition({paddingLeft:50,opacity:1,delay:index*50},500);
            });
            $(".searchlist span").each(function (index) {
                $(this).transition({paddingLeft:30,opacity:1,delay:index*50},500);
            });
        })
    });


    //关闭按钮
    $(".closebtn").click(function () {
        $(".closebtn").removeClass("active");
        $(".input-box").hide().css({x:40,opacity:0.5},500);
        $(".top-nav:not(.top-nav:first)").css("display","inline-block").transition({scale:1,opacity:1},500);
        $(".searchlist a").css({paddingLeft:170,opacity:0},500);
        $(".searchlist span").css({paddingLeft:170,opacity:0},500);
        $(".searchlist").hide();
    });


//    小屏时菜单点击事件
    var flag=true;
    $(".top-nav2:first").click(function (e) {
        if(flag){
            e.stopPropagation();
            $(".line1").transition({y:5,rotate:135});
            $(".line2").transition({y:-3,rotate:45});
            $(".nav2_lists").css({opacity:1}).slideDown("slow");
            $(".top-nav2:last").hide().transition({x:30,opacity:0},500);
            flag=false;
        }else{
            $(".line1").transition({y:0,rotate:0});
            $(".line2").transition({y:0,rotate:0});
            $(".nav2_lists").css({opacity:0}).slideUp();
            $(".top-nav2:last").transition({x:0,opacity:1},500).show();
            flag=true;
        }
    });
    //小屏时菜单点击事件中的搜索
    $(".nav2_lists li").eq(6).click(function () {
        $(".nav2_lists li").not(".nav2_lists li:last").slideUp();
        $(".top-nav2").eq(1).slideUp();
        $(".nav2_lists li").eq(6).hide();
        $(".nav2_li_input").css({display:"block"});
        $(".shou").slideDown();
    });
//    小屏时菜单点击事件中的搜索向上
    $(".shou").click(function () {
        $(".shou").slideUp();
        $(".nav2_lists li").slideDown();
        // $(".nav2_lists li").eq(6).show();
        $(".top-nav2").eq(1).slideDown();
        $(".nav2_li_input").css({display:"none"});
    })

//    底部点击加号效果
    var flag2=true;
    $(".f_list_cont2").click(function (e) {
        if(flag2){
            e.stopPropagation();
            $(this).children().eq(1).children().css({rotate:45});
            $(this).children().last().slideDown("slow");
            flag2=false;
        }else{
            $(this).children().eq(1).children().css({rotate:0});
            $(this).children().last().slideUp();
            flag2=true;
        }

    })
});