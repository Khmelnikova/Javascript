var names = ["Алексей", "Надежда", "Сергей", "Мария", "Александра", "Валерия"];
var cities = ["Минск", "Гродно", "Гомель", "Витебск", "Могилев", "Брест"];
var goods = [
    {
        name: 'Книга "Мастер и Маргарита"',
        image: "book.jpeg"
    },
    {
        name: 'Подсвечник "Звезда"',
        image: "star.jpg"
    },
    {
        name: 'Горшок для цветов "Беларусь"',
        image: "FlowerPot.jpg"
    },
    {
        name: 'Зеркало "Сияние"',
        image: "mirror.jpg"
    },
    {
        name: 'Кружка "Универсальная"',
        image: "cup.jpg"
    },
    {
        name: 'Ковер "Модерн"',
        image: "carpet.jpg"
    }
]

function random(numb) {
    return Math.floor(Math.random()*100%numb);
}
var body = document.getElementById("body");
var num = 0, numGoods = 0;
    var div_row = document.createElement("div");
    body.appendChild(div_row);
    div_row.setAttribute("class", "row");
var I = setInterval(function(){
        
    num = random(6);
    
    var div_col = document.createElement("div");
    div_row.appendChild(div_col);
    div_col.setAttribute("class", "col s12 m7");
    
    var div_card = document.createElement("div");
    div_col.appendChild(div_card);
    div_card.setAttribute("class", "card horizontal");
    
    var div_card_image = document.createElement("div");
    div_card.appendChild(div_card_image);
    div_card_image.setAttribute("class", "card-image");
    
    var img = document.createElement("img");
    div_card_image.appendChild(img);
    img.setAttribute("src", "img/" + goods[num].image);
    
    var div_card_stacked = document.createElement("div");
    div_card.appendChild(div_card_stacked);
    div_card_stacked.setAttribute("class", "card-stacked");
    
    var div_card_content = document.createElement("div");
    div_card_stacked.appendChild(div_card_content);
    div_card_content.setAttribute("class", "card-content");
    
    var p = document.createElement("p");
    div_card_content.appendChild(p);
    p.innerText = names[random(6)] + " из г." + cities[random(6)] + " купил " + (random(9) + 1) + " ед. товара " + goods[num].name;
    
    var div_card_action = document.createElement("div");
    div_card.appendChild(div_card_action);
    div_card_action.setAttribute("class", "card-action");
    
    var btn = document.createElement("input");
    div_card_action.appendChild(btn);
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "X");
    
    btn.addEventListener("click", function(){
    var firstpar = this.parentNode.parentNode.parentNode;
    firstpar.remove();
})
    

    numGoods++;
    if (numGoods > 9) {
        clearInterval(I);
    }
},Math.floor(Math.random()*1801 + 2700));


