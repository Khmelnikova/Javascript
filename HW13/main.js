var div = document.getElementById("div");
div.contentEditable = true;
var menu = document.getElementById("menu");

var bold = document.getElementById("bold");
var emphasize = document.getElementById("emphasize");
var italic = document.getElementById("italic");
var сlear = document.getElementById("сlear");
var hr = document.getElementById("hr");


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
})