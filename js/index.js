// $(window).on("load",function(){
//     $("#loading").hide();
//     $("#content").show();
// });
//文档结构加载完
$(document).ready(function(){
    //设置背景图片
    $('#background').css('background',"url('http://212.64.2.48:2019/cathy/bg.jpg')");
    $('#skyline').css('background',"url('http://212.64.2.48:2019/cathy/skyline.png') repeat-x 50% 0")
    $('#mountains1').css('background',"url('http://212.64.2.48:2019/cathy/mountains1.png') repeat-x 40% 0")
    $('#mountains2').css('background',"url('http://212.64.2.48:2019/cathy/mountains2.png') repeat-x 30% 0")


    $('#pic1').css('background-image',"url('http://212.64.2.48:2019/cathy/2.jpg')");
    $('#pic2').css('background-image',"url('http://212.64.2.48:2019/cathy/3.jpg')");
    $('#pic3').css('background-image',"url('http://212.64.2.48:2019/cathy/4.jpg')");
    $('#pic4').css('background-image',"url('http://212.64.2.48:2019/cathy/5.jpg')");
    $('#pic5').css('background-image',"url('http://212.64.2.48:2019/cathy/1.jpg')");

    //竖版图片特殊高度
    $('#pic4').css('height','800px');
    $('#pic5').css('height','900px');
});

//页面所有内容加载完，主要缓冲图片
window.onload=function () {
    $("#loading").fadeOut("slow");

    $("#pic1").mouseenter(function(){
        $("#header1").fadeIn("slow");
    });
    $("#pic2").mouseenter(function(){
        $("#header2").fadeIn("slow");
    });
    $("#pic3").mouseenter(function(){
        $("#header3").fadeIn("slow");
    });
    $("#pic4").mouseenter(function(){
        $("#header4").fadeIn("slow");
    });
    $("#pic5").mouseenter(function(){
        $("#header5").fadeIn("slow");
    });

    $("#pic1").mouseleave(function(){
        $("#header1").fadeOut("slow");
    });
    $("#pic2").mouseleave(function(){
        $("#header2").fadeOut("slow");
    });
    $("#pic3").mouseleave(function(){
        $("#header3").fadeOut("slow");
    });
    $("#pic4").mouseleave(function(){
        $("#header4").fadeOut("slow");
    });
    $("#pic5").mouseleave(function(){
        $("#header5").fadeOut("slow");
    });
}

