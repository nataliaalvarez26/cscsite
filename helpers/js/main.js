$(function() {
    $.scrollify({
        section : ".fullscreen-section",
        before: function(i) {
            setTimeout(function() {
                $('.fullscreen-section').eq(i).find('.text-area').animate({
                    opacity: 1
                }, 1000);
            }, 400);
        },
    });
});

$(document).ready(function() {

    $('.fullscreen-section').animate({
        backgroundSize: '100%'
    }, 2000, 'easeOutExpo');

    $('.fullscreen-section').eq(0).find('.text-area').animate({
        opacity: 1
    }, 1000);

    setTimeout(function() {
        $('.fullscreen-section').css('background-size', 'cover');
    }, 2000);

    $(window).scroll(function() {

        if ($(window).scrollTop() > 200) {
            $('.top-nav').fadeOut(400);
        } else {
            $('.top-nav').fadeIn(400);
        }

    });

    $('body').on('click tap', '.menu-button', function() {
        $('.hamburger').toggleClass('is-active');
        $('.menu-screen').fadeToggle(300);
        if ($('.hamburger').hasClass('is-active')) {
            setTimeout(function() {
                $('.menu-screen ul').animate({
                    opacity: 1,
                    left: "10%"
                }, 800, 'easeOutQuart');
            }, 150);
        } else {
            $('.menu-screen ul').animate({
                opacity: 0,
                left: "5%"
            }, 800, 'easeOutQuart');
        }

    });

});
