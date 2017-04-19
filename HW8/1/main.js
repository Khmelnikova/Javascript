var div = document.getElementById("div");
var menu = document.getElementById("menu");

var width = document.getElementById("width");
var height = document.getElementById("height");
var border = document.getElementById("border");
var color = document.getElementById("color");
var form = document.getElementById("form");
var borderColor = document.getElementById("borderColor");

var style = window.getComputedStyle(div);

div.addEventListener("contextmenu", function(e){
    e.preventDefault();
    menu.style.left = e.pageX + 'px';
    menu.style.top = e.pageY + 'px';
    menu.style.display="block";
});
document.addEventListener("click", function(){
    menu.style.display="none";
});

color.addEventListener("click", function(){
    menu.style.display="none";
    div.classList.toggle("color");
});
form.addEventListener("click", function(){
    menu.style.display="none";
    div.classList.toggle("form");
});
width.addEventListener("click", function(){
    menu.style.display="none";
    if (style["width"] == "400px") {
        div.style["width"] = "550px";
    }
    else {
        div.style["width"] = "400px";
    }
});
height.addEventListener("click", function(){
    menu.style.display="none";
    if (style["height"] == "400px") {
        div.style["height"] = "550px";
    }
    else {
        div.style["height"] = "400px";
    }
});
borderColor.addEventListener("click", function(){
    menu.style.display="none";
    if (style["border-color"] == "rgb(0, 0, 0)") {
        div.style["border-color"] = "rgb(194, 14, 104)";
    }
    else {
        div.style["border-color"] = "rgb(0, 0, 0)";
    }
});
border.addEventListener("click", function(){
    menu.style.display="none";
    if (style["border-width"] == "1px") {
        div.style["border-width"] = "3px";
    }
    else {
        div.style["border-width"] = "1px";
    }
});
console.log(style["border-width"]);

