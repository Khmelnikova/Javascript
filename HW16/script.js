var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var img = new Image(); 
	img.src = "img.png";
    img.onload = function() {
	    ctx.drawImage(img, 0, 0, 300, 220);
	}
canvas.addEventListener('dragover', function(e){
	e.preventDefault();
})
canvas.addEventListener('dragenter', function(e){
	this.classList.add('active');
})
canvas.addEventListener('dragleave', function(){
	this.classList.remove('active');
})
canvas.addEventListener('drop', function(e){
	e.preventDefault();
	this.classList.remove('active');
	var dT = e.dataTransfer;
	var file = dT.files[0];
	var reader = new FileReader();
	reader.readAsDataURL(file);
	ctx.clearRect(0, 0, 500, 400);
	reader.onload = function(){
	var img = new Image(); 
	var src = this.result;
	img.src = src;
    img.onload = function() {
	    ctx.drawImage(img, 0, 0, 300, 220);
	}
	}
	
})
