function init(){
	window.addEventListener('scroll', function(){
		var distanceY = window.pageYOffset || document.documentElement.scrollTop;
		var shrinkOn = 50;
		var header = document.getElementById("header");
		if(distanceY > shrinkOn){
			header.classList.add('vanish');
		}else{
			header.classList.remove('vanish');
		}

	});
}

window.onload = init();