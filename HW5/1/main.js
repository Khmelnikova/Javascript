var N = prompt("Введите N");
var M = prompt("Введите M");
N++;
M++;
var table = document.getElementById("table")
for(var i = 0; i < N; i++) {
    var tr = document.createElement("tr");
    table.appendChild(tr);
    for(var j = 0; j < M; j++) {
        var td = document.createElement("td");
        tr.appendChild(td);
        if(i == 0 && j == 0) {
            td.innerText = " ";
        }
        else if( i == 0){td.innerText = (i+1)*j;}
        else if( j == 0){td.innerText = (j+1)*i;}
        else {td.innerText = j*i;}
        if(i == j) {
            td.setAttribute("class", "diagonal");
        }
    }
}