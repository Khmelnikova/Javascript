var telNumber = prompt("Введите номер телефона");

var r = /(\+[3][7][5])[\s(]?([2][9])[\s)]?([0-9]{3})[\s\-_]?([0-9]{2})[\s\-_]?([0-9]{2})/;
if(r.test(telNumber)){
    document.writeln("Номер введен верно");
    var arr = r.exec(telNumber).slice(1,6);
    for(var i = 0; i < arr.length; i++) {
        document.writeln(arr[i]);
    }
} 
else{ document.writeln("Номер введен неверно")}