/* Author:
David Chapman
http://www.thisischapman.com
*/

$(document).ready(function() {
	$('.fit-text').fitText();
	
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