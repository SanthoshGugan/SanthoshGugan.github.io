function init(){
	window.addEventListener('scroll', function(){
		var distanceY = window.pageYOffset || document.documentElement.scrollTop;
		var shrinkOn = 300;
		var header = document.getElementById("header");
		if(distanceY > shrinkOn){
			header.classList.add('vanish');

		}

	});
}

window.onload = init();