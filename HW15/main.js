var video = document.getElementsByTagName("video")[0];
var play = document.getElementById("play");
var stop = document.getElementById("stop");
var forward = document.getElementById("forward");
var backward = document.getElementById("backward");
var stopvolume = document.getElementById("stopvolume");
var volume = document.getElementById("volume");
var track = document.getElementById("track");
var loadtrack = document.getElementById("loadtrack");
var speed = document.getElementById("speed");
var time = document.getElementById("time");

var sch1 = true;
var sch2 = true;

play.addEventListener("click", function(){
    if(sch1){
        video.play();
        play.value = "||";
        sch1 = false;
    }
    else {
        video.pause();
        play.value = "►";
        sch1 = true;
    }
});
stopvolume.addEventListener("click", function(){
    if(sch2){
        video.muted = true;
        stopvolume.value = "X";
        sch2 = false;
    }
    else {
        video.muted = false;
        stopvolume.value = "♫";
        sch2 = true;
    }
});
stop.addEventListener("click", function(){
    video.pause();
    video.currentTime = 0;
    play.value = "►";
    sch1 = true;
})

forward.addEventListener("click", function(){
    video.playbackRate+=0.25;
});

backward.addEventListener("click", function(){
    video.playbackRate-=0.25;
});

volume.addEventListener("input", function(){
    var size = document.getElementById("volume").value;
    video.volume = size/10;
});


video.addEventListener("loadedmetadata", function(){
 	video.addEventListener("play", function(){
	setInterval(function() {
		time.innerHTML =(video.currentTime/100).toFixed(2) + "/" +(video.duration/100).toFixed(2);
		var wdth = video.currentTime/video.duration*100;
		loadtrack.style.width = wdth + "%";
	})
	}, 1);

})

