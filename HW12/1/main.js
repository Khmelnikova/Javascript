var wrapper = document.getElementById("wrapper");
var products = document.createElement("ul");
wrapper.appendChild(products);
products.classList.add("products");
products.classList.add("clearfix");

var routes = { 
    "#books": {
    path: "books.json",
    handler: function(books){
        
        for( var i = 0; i < books.length; i++){
            
            var product_wrapper = document.createElement("li");
            products.appendChild(product_wrapper);
            product_wrapper.classList.add("product-wrapper");

            var product = document.createElement("div");
            product_wrapper.appendChild(product);
            product.classList.add("product");
    
            product_photo = document.createElement("div");
            product.appendChild(product_photo);
            product_photo.classList.add("product-photo");   
    
            var img = document.createElement("img");
            product_photo.appendChild(img);
            img.setAttribute("src", books[i].image);
    
            var h4 = document.createElement("h4");
            product.appendChild(h4);
            h4.innerText = books[i].name;
            
            var h5_1 = document.createElement("h5");
            product.appendChild(h5_1);
            h5_1.innerText = books[i].author;
    
            var p = document.createElement("p");
            product.appendChild(p);
            p.innerText = books[i].price + " руб";
            
            var h5_2 = document.createElement("h5");
            product.appendChild(h5_2);
            if(books[i].stock){
                h5_2.innerText = "В наличии";              
            }
            else {
                h5_2.innerText = "Нет в наличии"; 
            }
        }
    }
}, 
    "#games": {
    path: "games.json",
    handler: function(games){
        
        for( var i = 0; i < games.length; i++){
            
            var product_wrapper = document.createElement("li");
            products.appendChild(product_wrapper);
            product_wrapper.classList.add("product-wrapper");

            var product = document.createElement("div");
            product_wrapper.appendChild(product);
            product.classList.add("product");
    
            product_photo = document.createElement("div");
            product.appendChild(product_photo);
            product_photo.classList.add("product-photo");   
    
            var img = document.createElement("img");
            product_photo.appendChild(img);
            img.setAttribute("src", games[i].image);
    
            var h4 = document.createElement("h4");
            product.appendChild(h4);
            h4.innerText = games[i].name;
            
            var h5_1 = document.createElement("h5");
            product.appendChild(h5_1);
            h5_1.innerText = games[i].redaction;
    
            var p = document.createElement("p");
            product.appendChild(p);
            p.innerText = games[i].price + " руб";
            
            var h5_2 = document.createElement("h5");
            product.appendChild(h5_2);
            if(games[i].stock){
                h5_2.innerText = "В наличии";              
            }
            else {
                h5_2.innerText = "Нет в наличии"; 
            }
        }
        
    }
}, 
    "#notebooks": {
    path: "notebooks.json",
    handler: function(){}
    }
} 


var route = function(){ 
    var hash = location.hash; 
    var path = null; 
    var handler = null;
    ;
    for (var h in routes) { 
        if (h == hash) {
            path = routes[h].path; 
            handler = routes[h].handler;
            
        }
    } 
    if(path != null){ 
    openPage(path, handler); 
    } 
} 


var openPage = function(path, handler){ 
   
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET", path, true); 
    xhr.onload = function(){ 
        var array = JSON.parse(xhr.responseText); 
        handler(array);
    }  
    xhr.send(); 
} 

window.onhashchange = route; 
route();
