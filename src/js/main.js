$(document).ready(function(){
    $('.accordion__faq').click(function(){
        $(this).next('.accordion__answer').slideToggle(200);
        $(this).toggleClass('accordion__faq--active');
    });
    $('.header__btn').click(function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.info').offset().top
        }, 1000);
    });
});