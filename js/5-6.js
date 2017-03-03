var bStart = document.getElementById('start');
var bReset = document.getElementById('reset');
var go = false;

var counter = 0;
var timerId = 0;
	
var spanHours = document.getElementById('hours');
var spanMinutes = document.getElementById('minutes');
var spanSeconds = document.getElementById('seconds');
var spanMilisec = document.getElementById('milisec');
			
function timeWrite(){
	if(arguments[0]){
	 	spanMilisec.innerHTML = ('000');
		spanSeconds.innerHTML = ('00');
		spanMinutes.innerHTML = ('00');
		spanHours.innerHTML = ('00');
		counter = 0;
	}
	else{
	 	
		var milisec = counter;
		var seconds = Math.floor((counter / 1000) % 60);
	  	var minutes = Math.floor((counter / 1000 / 60) % 60);
	  	var hours = Math.floor((counter / (1000 * 60 * 60)) % 24);
		
		console.log('counter = ', counter);
		console.log('date = ' + hours + ':' + minutes + ':' + seconds + ':' + milisec);
	
		spanMilisec.innerHTML = ('00' + milisec).slice(-3);
		spanSeconds.innerHTML = ('0' + seconds).slice(-2);
		spanMinutes.innerHTML = ('0' + minutes).slice(-2);
		spanHours.innerHTML = ('0' + hours).slice(-2);
		 
		counter +=111;
	}
}

function setLabelStart(){
		bStart.innerHTML = ('START');
		console.log("set label = start");
}

function setLabelStop(){
		bStart.innerHTML = ('STOP');	
		console.log("set label = stop");
}

function NewTimer(){
	var self = this;
	self.run = function(){
		console.log("timer - runing");
		timerId = setInterval(timeWrite, 111);
	}
	self.stop = function(){
		console.log("timer -stoped");
		clearInterval(timerId);
	}
	self.reset = function(){
		console.log("timer - reseted");	
		clearInterval(timerId);
		timeWrite(1);
		go = false;
	};
}

var timer = new NewTimer();

bStart.addEventListener('click', function(){
	if (!go) {
		setLabelStop();
		go = true;
		timer.run();
	}else{
		setLabelStart();
		go = false;
		timer.stop();
	}
} );

bReset.addEventListener('click', function(){
	setLabelStart();
	timer.reset()
} );
