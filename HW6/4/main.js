var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var n4 = document.getElementById("n4");
var n5 = document.getElementById("n5");
var n6 = document.getElementById("n6");
var n7 = document.getElementById("n7");
var n8 = document.getElementById("n8");
var n9 = document.getElementById("n9");
var n0 = document.getElementById("n0");
var dot = document.getElementById("dot");
var field = document.getElementById("field");
var c = document.getElementById("C");
var divide = document.getElementById("divide");
var mult = document.getElementById("mult");
var min = document.getElementById("min");
var plus = document.getElementById("plus");
var equal = document.getElementById("equal");

var MR = document.getElementById("MR");
var M_pl = document.getElementById("M_pl");
var M_min = document.getElementById("M_min");
var MC = document.getElementById("MC");


var result = 0, num1 = 0, num2 = 0, operation = "";
var i = 0, M = 0;

n1.addEventListener("click", function(){
    if(i){ field.value = "", i = 0};
    field.value += "1";
});
n2.addEventListener("click", function(){
    if(i){ field.value = "", i = 0};
    field.value +=  "2";
});
n3.addEventListener("click", function(){
    if(i){ field.value = "", i = 0};
    field.value +=  "3";
});
n4.addEventListener("click", function(){
    if(i){ field.value = "", i = 0};
    field.value +=  "4";
});
n5.addEventListener("click", function(){
    if(i){ field.value = "", i = 0};
    field.value +=  "5";
});
n6.addEventListener("click", function(){
    if(i){ field.value = "", i = 0};
    field.value +=  "6";
});
n7.addEventListener("click", function(){
    if(i){ field.value = "", i = 0};
    field.value +=  "7";
});
n8.addEventListener("click", function(){
    if(i){ field.value = "", i = 0};
    field.value +=  "8";
});
n9.addEventListener("click", function(){
    if(i){ field.value = "", i = 0};
    field.value +=  "9";
});
n0.addEventListener("click", function(){
    if(i){ field.value = "", i = 0};
    field.value +=  "0";
});
c.addEventListener("click", function(){
    field.value = "";
    num1 = 0;
    num2 = 0;
});

dot.addEventListener("click", function(){
    if(!field.value.includes(".") && field.value !== "") {
        field.value +=  ".";
    }
});
plus.addEventListener("click", function(){
    num1 = Number(field.value);
    operation = "+";
    i = 1;
});
min.addEventListener("click", function(){
    num1 = Number(field.value);
    operation = "-";
    i = 1;
});
divide.addEventListener("click", function(){
    num1 = Number(field.value);
    operation = "/";
    i = 1;
});
mult.addEventListener("click", function(){
    num1 = Number(field.value);
    operation = "*";
    i = 1;
});
equal.addEventListener("click", function(){
    num2 = Number(field.value);
    field.value = "";
    switch(operation) {
        case "+": 
            field.value = num1 + num2;
            break;
        case "-": 
            field.value = num1 - num2;
            break;
        case "*": 
            field.value = num1 * num2;
            break;
        case "/": 
            field.value = num1 / num2;
            break;
    }
    i = 1;
    operation="";
});
M_pl.addEventListener("click", function(){
    M+=Number(field.value);
});
M_min.addEventListener("click", function(){
    M-=Number(field.value);
});
MC.addEventListener("click", function(){
    M = 0;
});
MR.addEventListener("click", function(){
    field.value = M;
    i = 1;
});