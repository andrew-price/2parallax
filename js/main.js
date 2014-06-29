$(document).ready(function(){
	var $window = $(window);

	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); //assigning the object
		$(window).scroll(function(){
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			console.log(yPos);

			//Put together our final BG position
			var coords = '50% '+ yPos + 'px';

			//Move the BG
			$bgobj.css({backgroundPosition: coords});

		});

	});


});


