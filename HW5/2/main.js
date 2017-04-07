var arr = [];
var table = document.getElementById("table")
arr[0] = {
    flag: "australia.gif",
    name: "Australia",
    population: 23130931,
    code: "+61"
}
arr[1] = {
    flag: "austria.gif",
    name: "Austria",
    population: 8032926,
    code: "+43"
}
arr[2] = {
    flag: "azerbaijan.gif",
    name: "Azerbaijan",
    population: 9574000,
    code: "+994"
}
arr[3] = {
    flag: "albania.gif",
    name: "Albania",
    population: 3038594,
    code: "+355"
}
arr[4] = {
    flag: "algeria.png",
    name: "Algeria",
    population: 38087812,
    code: "+213"
}
arr[4] = {
    flag: "bangladesh.jpg",
    name: "Bangladesh",
    population: 168957745,
    code: "+880"
}
arr[5] = {
    flag: "belarus.gif",
    name: "Belarus",
    population: 9505200,
    code: "+375"
}
arr[6] = {
    flag: "belize.png",
    name: "Belize",
    population: 347369,
    code: "+501"
}
arr[7] = {
    flag: "Belgium.gif",
    name: "Belgium",
    population: 11250585,
    code: "+32"
}
arr[8] = {
    flag: "UnitedKingdom.png",
    name: "United Kingdom",
    population: 63182178,
    code: "+44"
}
arr[9] = {
    flag: "vietnam.png",
    name: "Vietnam",
    population: 92477857,
    code: "+84"
}
arr[10] = {
    flag: "germany.png",
    name: "Germany",
    population: 82175684,
    code: "+49"
}
arr[11] = {
    flag: "egypt.png",
    name: "Egypt",
    population: 88487396,
    code: "+20"
}
arr[12] = {
    flag: "israel.png",
    name: "Israel",
    population: 8585000,
    code: "+972"
}
for(var i = 0; i < arr.length; i++) {
    var tr = document.createElement("tr");
    table.appendChild(tr);
    for(var j = 0; j < 4; j++) {
        var td = document.createElement("td");
        tr.appendChild(td);
        switch(j) {
            case 0: 
                if(i){
                    var img  = document.createElement("img");
                    td.appendChild(img);
                    img.setAttribute("src", "img/" + arr[i].flag);}
                else { 
                    td.innerText = "Flag"
                }; break;
            case 1:
                if(i){ 
                    td.innerText = arr[i].name;}
                else {
                    td.innerText = "Name"
                }; break;
            case 2: 
                if(i){ 
                    td.innerText = arr[i].population;}
                else {
                    td.innerText = "Population"
                }; break;
            case 3:                 
                if(i){ 
                    td.innerText = arr[i].code;}
                else {
                    td.innerText = "Code"
                }; break;
    }
}
}
