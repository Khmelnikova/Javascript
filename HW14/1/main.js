var btn = document.getElementById("btn");
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

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
})