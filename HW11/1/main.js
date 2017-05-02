var routes = { 
    "#name": {
    path: "name.html",
    handler: function(){
        document.getElementById("button").addEventListener("click", function(){
        alert("Привет, " + document.getElementById("input").value + "!");
    })
    }
}, 
    "#context_menu": {
    path: "context_menu.html",
    handler: function(){
        var nwdiv = document.getElementById("nwdiv");
        var menu = document.getElementById("menu");
        
        var border = document.getElementById("border");
        var color = document.getElementById("color");
        var form = document.getElementById("form");
        
        var style = window.getComputedStyle(nwdiv);
        
        nwdiv.addEventListener("contextmenu", function(e){
            e.preventDefault();
            menu.style.left = e.pageX + 'px';
            menu.style.top = e.pageY + 'px';
            menu.style.display="block";
        });
        document.addEventListener("click", function(){
            menu.style.display="none";
        });

        color.addEventListener("click", function(){
            menu.style.display="none";
            nwdiv.classList.toggle("color");
        });
        form.addEventListener("click", function(){
            menu.style.display="none";
            nwdiv.classList.toggle("form");
        });
        border.addEventListener("click", function(){
            menu.style.display="none";
            if (style["border-width"] == "1px") {
                nwdiv.style["border-width"] = "3px";
            }
            else {
                nwdiv.style["border-width"] = "1px";
            }
        });
    }
}, 
    "#time": {
    path: "time.html",
    handler: function(){
        var secId=document.getElementById("sec");
        var minId=document.getElementById("min");
        var houId=document.getElementById("hou");
        var i = 0;
        setInterval(function(){
            var d = new Date();
            var sec = d.getSeconds();
            var min = d.getMinutes();
            var hou = d.getHours();
            houId.innerText = hou;
            minId.innerText = min;
            secId.innerText = sec;
        }, 1000)
    }
},
    "#info": {
    path: "info.html",
    handler: function(){
        console.log("Info!");        
    }
},
    "#about": {
    path: "about.html",
    handler: function(){
        console.log("About!");
    }
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
    var div = document.getElementById("div");
    xhr.onload = function(){ 
        div.innerHTML = xhr.responseText;
        handler();
    }  
    xhr.send(); 
} 

window.onhashchange = route; 
route();