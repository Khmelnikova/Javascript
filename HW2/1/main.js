var N = prompt("Введите количество элементов массива", N);
var s = prompt("Введите s", s);
var r = prompt("Введите r", r);
var mn = (s/100)*(100-r);
var mx = (s/100)*(100+r*1);

var arr = new Array(0);
for(var i = 0; i < N; i++) {
    arr.push(Math.floor(Math.random()*(mx + 1 - mn) + mn));
}
document.writeln(arr);
var tmp, avg = 0;
for(var i = 0; i < N; i++) {
    for(var j = i; j < N; j++) {
        if (arr[i] > arr[j]) {
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}
document.writeln("Отстортированный по возрастанию массив: " + arr);
for(var i = 0; i < N; i++) {
    avg+=arr[i];
}
avg /= N;
document.writeln("Среднее значение = " + avg);
