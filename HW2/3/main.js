var N = prompt("Введите N");
var x = prompt("Введите x");

var arr = new Array(0);
if ( isFinite(x) && isFinite(N)) {
    N*=1;
    for(var i = 0; i < N + 1; i++) {
        arr[i] = prompt("Введите коэффициент");
    }
    
    var result = 0;
    for (var i = 0; i < N + 1; i++) {
        result+=arr[i]*Math.pow(x, i);
    }
    document.writeln("Ответ " + result);
} else document.writeln("Вы ввели не числа");