var a, b, operation;
a = prompt("Введите первое число", a);
b = prompt("Введите второе число", b);
operation = prompt("Введите операцию", operation);

a *= 1;
b *= 1;

if(isFinite(a) && isFinite(b)) {
    switch(operation) {
        case "+": document.writeln(a + " + " + b + " = " + (a+b) ); break;
        case "-": document.writeln(a + " - " + b + " = " + (a-b) ); break;
        case "*": document.writeln(a + " * " + b + " = " + (a*b) ); break;
        case "/": document.writeln(a + " / " + b + " = " + (a/b) ); break;
        default: document.writeln("Вы ввели неверную операцию");
    }
}
else {
    document.writeln("Вы ввели не числа");
}