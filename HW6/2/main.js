var btn_sh = document.getElementById("btn_sh");
var btn_desh = document.getElementById("btn_desh");
var field_sh = document.getElementById("field_sh");
var field_desh = document.getElementById("field_desh");

var str, new_str = "", new_el, code;


btn_sh.addEventListener("click", function(){
    field_desh.value = "";
    new_str = "";
    str = field_sh.value;
    for(var i = 0; i < str.length; i++){
        code = str.charCodeAt(i);
        code = (127 - code) + 64;
        new_str += String.fromCharCode(code);
    }
    field_desh.value = new_str;
});

btn_desh.addEventListener("click", function(){
    field_sh.value = "";
    new_str = "";
    str = field_desh.value;
    for(var i = 0; i < str.length; i++){
        code = str.charCodeAt(i);
        code = (127 - code) + 64;
        new_str += String.fromCharCode(code);
    }
    field_sh.value = new_str;
});