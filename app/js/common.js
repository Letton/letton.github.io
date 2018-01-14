var current_slide=0;
function slider_next_slide(){
	var slides = document.querySelectorAll('.slider_slide');
	document.querySelector('.slider_line').style.left=-1*(100 * current_slide) + '%';
	current_slide++;
	if (current_slide > slides.length-1) {
		current_slide=0;
	}
}
document.body.onload = function(){
	setTimeout(function(){
		document.querySelector('#preloader').style.opacity = 0;
		setTimeout(function(){
			document.querySelector('#preloader').style.display = 'none';	
		}, 250);
		document.body.style.overflowY = 'visible';
		slider_next_slide();
		setInterval(function(){
			slider_next_slide();
		}, 5000);
	}, 1000);
}