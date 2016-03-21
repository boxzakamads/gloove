+function ($) {
	'use strict';
	console.log("up and sss");


	$(function () {
		if (/mobile|tablet/i.test(navigator.userAgent)) {
			 // Mobile/Touch Device:
			 // --> Display link or button which launches iframe as popup/modal
			 // --> (or which simply redirects to the form on typeform.com)
			} else {
			 // Other Devices:
			 // --> Display the inline iframe
			}
		})

}(jQuery);