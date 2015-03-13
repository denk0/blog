$(document).ready(function(){

    $(function(){
        $('.container .container').mixItUp();
    });

    $(".popup_content").magnificPopup({
        type: "inline",
        midClick: true
    });

    $("header a[href*='#']").mPageScroll2id();

    function heightDetect() {
        $(".teaser").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    $(".toggle_menu").click(function(){
        $(".header_menu").toggleClass("active");
        $(".toggle_menu").toggleClass("active");
    });

    $(".to_top").click(function(){
        if ($(".toggle_menu").hasClass("active")) {
            $(".header_menu").toggleClass("active");
            $(".toggle_menu").toggleClass("active");
        };
    });

});

$(window).resize(function(){
   var videoSize = $(".teaser video").height();
   $(".teaser").css({"min-height":videoSize});
});


