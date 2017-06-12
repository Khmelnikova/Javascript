var btn = document.getElementById("btn");
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var delButton = document.getElementById("delButton")

var dataURL = localStorage.getItem(canvas);
var img = new Image;
canvas.appendChild(img);
img.src = dataURL;
img.onload = function () {
    ctx.drawImage(img, 0, 0);
};

function func(e){
    ctx.strokeStyle = "rgb(181, 22, 139)";
    ctx.lineTo(e.pageX, e.pageY);
    ctx.stroke();
}

canvas.addEventListener("mousedown", function(e){
    ctx.moveTo(e.pageX, e.pageY);
    canvas.addEventListener("mousemove", func)
});

canvas.addEventListener("mouseup", function(e){
    canvas.removeEventListener("mousemove", func)
});

btn.addEventListener("click", function(){
    var dataURL = canvas.toDataURL("image.png");
    window.open(dataURL);
});

delButton.addEventListener("click", function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

window.onunload = function(){
    localStorage.setItem(canvas, canvas.toDataURL());
}
