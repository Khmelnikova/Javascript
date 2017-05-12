var div = document.getElementById("div");
div.contentEditable = true;
var menu = document.getElementById("menu");

var bold = document.getElementById("bold");
var emphasize = document.getElementById("emphasize");
var italic = document.getElementById("italic");
var сlear = document.getElementById("сlear");
var hr = document.getElementById("hr");
var color = document.getElementById("color");
var link = document.getElementById("link");

bold.addEventListener("click", function(){
    document.execCommand("bold", false, null);
});

italic.addEventListener("click", function(){
    document.execCommand("italic", false, null);
});

emphasize.addEventListener("click", function(){
    document.execCommand("underline", false, null);
});

сlear.addEventListener("click", function(){
    document.execCommand("removeFormat", false, null);
});

hr.addEventListener("click", function(){
    document.execCommand("insertHorizontalRule", false, null);
});

color.addEventListener("click", function(){
    document.execCommand("foreColor", false, "red");
});

link.addEventListener("click", function(){ 
    var url = prompt("Введите URL "); 
    document.execCommand("createLink", false, url) 
})