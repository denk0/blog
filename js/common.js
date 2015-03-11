$(document).ready(function(){
    $("a[href*='#']").mPageScroll2id();

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
