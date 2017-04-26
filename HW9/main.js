var id = 0;
function Product(name, type, price, date){
    this.name = name; 
    this.type = type; 
    this.price = price; 
    this.date = new Date(date); 
    this.id = 0; 
};

Product.prototype.setId = function(){
    id++;
    this.id = id;
};


function Foodstuff(bestBefore){
    Product.apply(this, arguments);
    this.bestBefore = new Date(bestBefore);// годен до
    
    Object.defineProperty(this, "expDate", { 
    get: function() {
        return this.bestBefore.getFullYear() - this.date.getFullYear();
    }
});
};

Foodstuff.prototype = new Product();

function Shop(name, addres, markup, income){
    this.name = name; 
    this.addres = addres; 
    this.markup = markup; // наценка
    this.income = income; // доход
    
    Object.defineProperty(this, "products", { 
    set: function(product) {
        this.products.push(product);
    }
    });
    
    
    Object.defineProperty(this, "sum", { 
    get: function() {
        var sum = 0;
        for(var i = 0; i < this.products.length; i++){
            sum+=this.products[i].price;
        };
        return sum;
    }
    });
    
};

Shop.prototype.addProduct = function(t, n){
    for(var i = 0; i < n; i++) {
        this.products.push(t);
    }
};

