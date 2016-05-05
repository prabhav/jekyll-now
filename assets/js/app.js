// app.jsconst canvas = document.getElementById('webgl-contents');

	var main = function() {
	$('.genericon-menu').click(function() {
		// $('nav').toggleClass('active');
		if($('nav').attr('class') === 'active') {
			$('nav').addClass('close').removeClass('active');
			$(this).addClass('close').removeClass('active');
		}
		else {
			$('nav').addClass('active').removeClass('close');
			$(this).addClass('active').removeClass('close');
		}
	});
};

$(document).ready(main);
