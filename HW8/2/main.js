var li = document.getElementsByTagName("li");
var submenu = document.getElementsByClassName("submenu");

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function(e){
        if(this.children[0]){
            this.children[0].classList.remove("display");
        }
    })
}

for (var i = 0; i < submenu.length; i++){
    submenu[i].addEventListener("mouseout", function(){
        this.classList.add("display");
    })
}