var block = document.getElementById("block");
var body = document.getElementById("body");
window.addEventListener("scroll", function(){
	if (window.pageYOffset > block.offsetTop && window.pageYOffset < 2000){
		block.style.position = "fixed";
		block.style.top = 0;
	}
else{
		if(document.body.getBoundingClientRect().top >= -block.offsetTop){
			block.style.position ="absolute";
			block.style.top = "100px";
		}
		if(document.body.getBoundingClientRect().top <= -2000){
			block.style.position ="absolute";
			block.style.top = "2000px";
		}
	}

})