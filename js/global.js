$(function () {
    // Mix up the Murray pics
    $('section .item').each(function(index, item) {
        $(item).css('background-image', 'url(http://www.fillmurray.com/' + (250+index*2) + '/300)');
    });

    // Make left nav sticky
    var nav = $('.sidenav');
    var navTop = nav.offset().top;
    var navLeft = nav.offset().left;
    $(window).scroll(function() {
        var makeItStick = navTop < $(window).scrollTop();
        nav.toggleClass('stuck', makeItStick);
        nav.css('left', makeItStick ? navLeft : 0);
    });
});
