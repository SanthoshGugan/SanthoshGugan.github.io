var count = 0;
var timeoutID;
var intervalID;
function removeClasses(sprintElement){
	if(!!sprintElement && sprintElement.classList.contains('circleNext'))
			sprintElement.classList.remove('circleNext');
	if(!!sprintElement && sprintElement.classList.contains('circleAnother'))
			sprintElement.classList.remove('circleAnother');
}
function changeSprintPosition(){
	var sprintElement = document.getElementById('circleSprint');
	removeClasses(sprintElement);
	 if(count == 1 && !!sprintElement){
		sprintElement.classList.add('circleNext');
	}else if(count == 2 && !!sprintElement){
		sprintElement.classList.add('circleAnother');
	}else if(count == 3 && !!sprintElement){
		sprintElement.classList.add('circleNext');
	}
	count = (count + 1) % 4;
	

};
function init(){
	var lastDistanceY = 0;
	window.addEventListener('scroll', function(){
		var distanceY = window.pageYOffset || document.documentElement.scrollTop;
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
		};
		lastDistanceY =  distanceY;

	});

	intervalID = window.setInterval(changeSprintPosition,3000);
}

window.onload = init();