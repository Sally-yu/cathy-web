// $(window).on("load",function(){
//     $("#loading").hide();
//     $("#content").show();
// });

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

