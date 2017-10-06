function init(){
	var lastDistanceY = 0;
	window.addEventListener('scroll', function(){
		var distanceY = window.pageYOffset || document.documentElement.scrollTop
		var shrinkOn = 50;
		var header = document.getElementById("header");
		if(lastDistanceY > distanceY && distanceY > shrinkOn){
			header.classList.add('whiteVanish');
			header.classList.remove('vanish');
		}else if(distanceY > shrinkOn){
			header.classList.remove('whiteVanish');
			header.classList.add('vanish');
		}else{
			header.classList.remove('vanish');
			header.classList.remove('whiteVanish');
		}
		;
		lastDistanceY =  distanceY;

	});
}

window.onload = init();