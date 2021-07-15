$(document).ready(function(){
    $('.accordion__faq').click(function(){
        $(this).toggleClass('accordion__faq--active');
        $(this).next('.accordion__answer').slideToggle(200);
        $(this).nextAll('.accordion__arrow').toggleClass('accordion__arrow--active');
    });
    $('.header__btn').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.info').offset().top
        }, 1000);
    });
});



