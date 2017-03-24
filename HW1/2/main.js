var str, res = 0;
str = prompt("Введите строку", str);
document.writeln(str);

for(var i = 0; i < str.length; i++) {
    if(str[i] == "(") {
        res++;
    } 
    else if (str[i] == ")") {
        res--;
    }
    if (res < 0) {
        break;
    }
}
if(res == 0) {
    document.writeln("Скобки расставлены верно")
}
else {
    document.writeln("Скобки расставлены неверно")
}