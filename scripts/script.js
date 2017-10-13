var count1 = 0;
var count2= 0;
var intervalID1;
var intervalID2;
function removeClasses(sprintElement){
	if(!!sprintElement && sprintElement.classList.contains('circleNext'))
			sprintElement.classList.remove('circleNext');
	if(!!sprintElement && sprintElement.classList.contains('circleAnother'))
			sprintElement.classList.remove('circleAnother');
}
function changeSprint1Position(){
	var sprint1Element = document.getElementById('circleSprint1');
	removeClasses(sprint1Element);
	 if(count1 == 1 && !!sprint1Element){
		sprint1Element.classList.add('circleNext');
	}else if(count1 == 2 && !!sprint1Element){
		sprint1Element.classList.add('circleAnother');
	}else if(count1 == 3 && !!sprint1Element){
		sprint1Element.classList.add('circleNext');
	}
	count1 = (count1 + 1) % 4;
	

};

function changeSprint2Position(){
	var sprint2Element = document.getElementById('circleSprint2');
	removeClasses(sprint2Element);
	 if(count2 == 1 && !!sprint2Element){
		sprint2Element.classList.add('circleNext');
	}else if(count2 == 2 && !!sprint2Element){
		sprint2Element.classList.add('circleAnother');
	}else if(count2 == 3 && !!sprint2Element){
		sprint2Element.classList.add('circleNext');
	}
	count2 = (count2 + 1) % 4;
	

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

	intervalID1 = window.setInterval(changeSprint1Position,8000);
	intervalID2 = window.setInterval(changeSprint2Position,9000);
}

window.onload = init();