// Execute the following code when the page is loaded
$(function () {
    $('section .item').each(function(index, item) {
        $(item).css('background-image', 'url(http://www.fillmurray.com/' + (250+index) + '/300)');
    });
});
