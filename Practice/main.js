var flowers = [
    {
        name: "Poза Avalanche Peach",
        price: 1.96,
        image: "images/1.jpg",
        quantity: 0
    },
    {
        name: "Роза Red Naomi",
        price: 1.82,
        image: "images/2.jpg",
        quantity: 0
    },
    {
        name: "Роза Aqua",
        price: 4.32,
        image: "images/3.jpg",
        quantity: 0
    },
    {
        name: "Розы Penni Lane",
        price: 4.68,
        image: "images/4.jpg",
        quantity: 0
    },
    {
        name: "Тюльпан Golden Parade",
        price: 2.34,
        image: "images/5.jpg",
        quantity: 0
    },
    {
        name: "Тюльпан Dynasty",
        price: 2.05,
        image: "images/6.jpg",
        quantity: 0
    },
    {
        name: "Тюльпан TU EN SUPRI",
        price: 2.70,
        image: "images/7.jpg",
        quantity: 0
    },
    {
        name: "Орхидея tak Elliot Rogers",
        price: 4.32,
        image: "images/8.jpg",
        quantity: 0
    },
    {
        name: "Орхидея Vanda Bajong Sky",
        price: 4.68,
        image: "images/9.jpg",
        quantity: 0
    },
    {
        name: "Хризантема Chr G 'Holiday'",
        price: 3.60,
        image: "images/10.jpg",
        quantity: 0
    },
    {
        name: "Хризантема Indicum Grp tros",
        price: 3.10,
        image: "images/11.jpg",
        quantity: 0
    },
    {
        name: "Гербера mini Barilli",
        price: 2.88,
        image: "images/12.jpg",
        quantity: 0
    },
    {
        name: "Гербера grootbloemig 'Candela'",
        price: 4.68,
        image: "images/13.jpg",
        quantity: 0
    },
    {
        name: "Гербера Mini 'Cafe'",
        price: 2.70,
        image: "images/14.jpg",
        quantity: 0
    },
    {
        name: "Гербера grootbloemig 'Orpheus'",
        price: 4.32,
        image: "images/15.jpg",
        quantity: 0
    }
];

var result = document.getElementById("result");
result.value = 0;

var res_var = 0;
wrapper = document.getElementById("wrapper");

var products = document.createElement("ul");
wrapper.appendChild(products);
products.classList.add("products");
products.classList.add("clearfix")


for (var i = 0; i < flowers.length; i++){
    
    var product_wrapper = document.createElement("li");
    products.appendChild(product_wrapper);
    product_wrapper.classList.add("product-wrapper");

    var product = document.createElement("div");
    product_wrapper.appendChild(product);
    product.classList.add("product");
    product.setAttribute("id", i);
    
    product_photo = document.createElement("div");
    product.appendChild(product_photo);
    product_photo.classList.add("product-photo");   
    
    var img = document.createElement("img");
    product_photo.appendChild(img);
    img.setAttribute("src", flowers[i].image);
    
    var h4 = document.createElement("h4");
    product.appendChild(h4);
    h4.innerText = flowers[i].name;
    
    var p = document.createElement("p");
    product.appendChild(p);
    p.innerText = flowers[i].price + " руб";
    
    var input = document.createElement("input");
    product.appendChild(input);
    input.setAttribute("type", "number");
    input.setAttribute("min", "0");
    
    
    var btn = document.createElement("input");
    product.appendChild(btn);
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "ok");
    
    input.addEventListener("focus", function(){
        this.parentNode.classList.add("checked");
    })
    
    input.addEventListener("blur", function(){
        this.parentNode.classList.remove("checked");
    })
    
    
    btn.addEventListener("click", function(){
        if(this.previousSibling.value >= 0) {
        res_var-=flowers[this.parentNode.id].quantity*flowers[this.parentNode.id].price;
        flowers[this.parentNode.id].quantity = this.previousSibling.value;
        res_var+= this.previousSibling.value*flowers[this.parentNode.id].price;
        result.value = res_var.toFixed(2);}
        else {
            this.previousSibling.value = 0;
        }
        })
};

var packaging = 0;
var delivery = 0;

var select_packaging = document.getElementById("select_packaging");
var select_delivery = document.getElementById("select_delivery");

select_packaging.addEventListener("change", function(){
    res_var-=packaging;
    for (var i = 0; i < select_packaging.length; i++) {
        if (select_packaging[i].type === 'radio' && select_packaging[i].checked && select_packaging[i].name === 'select_packaging') {
            res_var+=Number(select_packaging[i].value);
            packaging = Number(select_packaging[i].value);
        }
    }
    result.value = res_var.toFixed(2);
})


select_delivery.addEventListener("change", function(){
    res_var-=delivery;
    res_var+=Number(select_delivery.value);
    delivery = Number(select_delivery.value);
    result.value = res_var.toFixed(2);
});

