var names = ["Алексей", "Надежда", "Сергей", "Мария", "Александра", "Валерия"];
var cities = ["Минск", "Гродно", "Гомель", "Витебск", "Могилев", "Брест"];
var goods = ['Книга "Мастер и Маргарита"', 'Подсвечник "Звезда"', 'Горшок для цветов "Беларусь"', 'Зеркало "Сияние"', 'Кружка "Универсальная"', 'Ковер "Модерн"']
var images = ["book.jpeg", "star.jpg", "FlowerPot.jpg", "mirror.jpg", "cup.jpg", "carpet.jpg"]

function random(numb) {
    return Math.floor(Math.random()*100%numb);
}
var body = document.getElementById("body");
var num = 0, numGoods = 0;
var I = setInterval(function(){
    num = random(6);
    var div = document.createElement("div");
    body.appendChild(div);
    var img  = document.createElement("img");
    div.appendChild(img);
    img.setAttribute("src", "img/" + images[num]);
    var p = document.createElement("p");
    div.appendChild(p);
    p.innerText = names[random(6)] + " из г." + cities[random(6)] + " купил " + (random(9) + 1) + " ед. товара " + goods[num];
    numGoods++;
    if (numGoods > 9) {
        clearInterval(I);
    }
},Math.floor(2700 + Math.random()*1801);