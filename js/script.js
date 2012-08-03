/* Author:
David Chapman
http://www.thisischapman.com
*/

$(document).ready(function() {
    // Initiate responsive slider
    if($('body').hasClass('home')) {
          $("#slideshow ul").responsiveSlides({
              maxwidth: 420,
              speed: 800,
              timeout: 3500
          });
    } else {}

    // Initiate responsive text
    $('.fit-text').fitText();

    // Initiate shop/buy botton animation
	buyButton = $('.buy-button');
	currentSize = buyButton.css('font-size');

	$('.buy-button').hover(function() {
		currentSize = buyButton.css('fontSize');

		$(this).stop().animate({
			fontSize: 1.2 * parseInt(currentSize)
		}, 200);
	}, function() {
		$(this).stop().animate({
			fontSize: currentSize
		}, 200);
	});
});