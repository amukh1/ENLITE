/*------------------------------------------------------------------
[Main Script]

Project     : p1-UkipaHtml
Version     : 1.0
Author      : Md Ekramul Hassan Avi
Author URI  : https://www.tigertemplate.com
-------------------------------------------------------------------*/

// mobile menu call
$('#phn-menu').slicknav({
    prependTo:'#nav-menu'
});

// Scrollbar
(function($){
    $(window).on("load",function(){
        $(".scrollbar").mCustomScrollbar({
            theme:"dark"
        });
    });
})(jQuery);

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: false,
    margin:45,
    nav:true,
    navText: ["<img src='img/slider_left.png' alt='Left'>","<img src='img/slider_right.png' alt='Right'>"],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
