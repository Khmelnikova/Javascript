var frames = document.getElementById("frames");
var frame = document.getElementById("frame");
var caption_input = document.getElementById("caption_input");
var caption = document.getElementById("caption");
var description_input = document.getElementById("description_input");
var description = document.getElementById("description");
var destination_input = document.getElementById("destination_input");
var destination = document.getElementById("destination");
var sender = document.getElementById("sender");
var sender_input = document.getElementById("sender_input");
var menu = document.getElementById("menu");
var mainCard = document.getElementById("mainCard");
var faximile = document.getElementById("faximile");
var faximiles = document.getElementById("faximiles");
var select_face = document.getElementsByClassName("select_face");
var select_size = document.getElementsByClassName("select_size");
var select_color = document.getElementsByClassName("select_color");
var save = document.getElementById("save");

var bgColors = [ "#00FF7F" , "#20B2AA" , "#FFB6C1"];
var faces = ["Arial", "Geneva", "Helvetica", "Georgia"];
var sizes = ["1", "2", "3", "4", "5", "6", "7" ];
var fontColors = ["Black", "DarkTurquoise", "Green", "Crimson"];

var card = {
    color:"",
    frame:"",
    caption: {
        face: "Arial",
        str: "Заголовок",
        size: "6",
        color: "Black"
    },
    description: {
        face: "Arial",
        str: "Напишите поздравление",
        size: "4",
        color: "Black"
    },
    destination: {
        face: "Arial",
        str: "Имя Фамилия",
        size: "5",
        color: "Black"
    },
    sender: {
        face: "Arial",
        str: "От кого",
        size: "4",
        color: "Black"
    },
    faximile:""
}


var createCard = function(){
    frame.setAttribute("src", card.frame);
    caption.innerHTML = '<font face = ' +  card.caption.face + ' color = ' + card.caption.color + ' size = ' + card.caption.size  + '>' + card.caption.str + '</font>';
    
    description.innerHTML = '<font face = ' +  card.description.face + ' color = ' + card.description.color + ' size = ' + card.description.size + '>' + card.description.str + '</font>';
    destination.innerHTML = '<font face = ' +  card.destination.face + ' color = ' + card.destination.color + ' size = ' + card.destination.size + '>' + card.destination.str + '</font>';
    sender.innerHTML = '<font face = ' +  card.sender.face + ' color = ' + card.sender.color + ' size = ' + card.sender.size + '>' + card.sender.str + '</font>';
    
    mainCard.setAttribute("style", "background-color:" + card.color);
    faximile.setAttribute("src", card.faximile)
}



var xhr = new XMLHttpRequest(); 

xhr.open("GET", "frames.json", true); 
xhr.onload = function(){ 
    createCard();
    var arrayFrames = JSON.parse(xhr.responseText); 
    createFrames(arrayFrames);
    createFaximile(arrayFrames);
}  
xhr.send(); 

var createFrames = function(arrayFrames) {
    for( var i = 0; i < arrayFrames.length; i++) {
        var frame_wrapper = document.createElement("div");
        frames.appendChild(frame_wrapper);
        frame_wrapper.classList.add("frame-wrapper");
        frame_wrapper.addEventListener("click", function(){
            var url = this.firstChild["src"];
            card.frame = url;
            createCard();
        })
        
        var frame_image = document.createElement("img");
        frame_wrapper.appendChild(frame_image);
        frame_image.classList.add("frame-image");
        frame_image.setAttribute("src", arrayFrames[i].url);
        
        var frame_name = document.createElement("p");
        frame_wrapper.appendChild(frame_name);
        frame_name.classList.add("frame-name");
        frame_name.innerText = arrayFrames[i].name;
    }
};

var createFaximile = function(arrayFrames) {
    for( var i = 0; i < arrayFrames.length; i++) {
        var frame_wrapper = document.createElement("div");
        faximiles.appendChild(frame_wrapper);
        frame_wrapper.classList.add("frame-wrapper");
        frame_wrapper.addEventListener("click", function(){
            var url = this.firstChild["src"];
            card.faximile = url;
            createCard();
        })
        
        var frame_image = document.createElement("img");
        frame_wrapper.appendChild(frame_image);
        frame_image.classList.add("frame-image");
        frame_image.setAttribute("src", arrayFrames[i].faximile);
    }
};
for (var i = 0; i < select_face.length; i++){
    for( var j = 0; j < faces.length; j++) {
        var option = document.createElement("option");
        select_face[i].appendChild(option);
        option.innerText = faces[j];
    }
    select_face[i].addEventListener("input", function(){
        var id = this["id"];
        switch(id) {
            case "0": 
                card.caption.face = this.value;
                createCard(); break;
            case "1": 
                card.destination.face = this.value;
                createCard(); break;
            case "2": 
                card.description.face = this.value;
                createCard();break;
            case "3": 
                card.sender.face = this.value;
                createCard(); break;
        }
    })
}

for (var i = 0; i < select_size.length; i++){
    for( var j = 0; j < sizes.length; j++) {
        var option = document.createElement("option");
        select_size[i].appendChild(option);
        option.innerText = sizes[j];
    }
    select_size[i].addEventListener("input", function(){
        var id = this["id"];
        switch(id) {
            case "00": 
                card.caption.size = this.value;
                createCard(); break;
            case "11": 
                card.destination.size = this.value;
                createCard(); break;
            case "22": 
                card.description.size = this.value;
                createCard();break;
            case "33": 
                card.sender.size = this.value;
                createCard(); break;
        }
    })
}

for (var i = 0; i < select_color.length; i++){
    for( var j = 0; j < fontColors.length; j++) {
        var option = document.createElement("option");
        select_color[i].appendChild(option);
        option.innerText = fontColors[j];
    }
    select_color[i].addEventListener("input", function(){
        var id = this["id"];
        switch(id) {
            case "000": 
                card.caption.color = this.value;
                createCard(); break;
            case "111": 
                card.destination.color = this.value;
                createCard(); break;
            case "222": 
                card.description.color = this.value;
                createCard();break;
            case "333": 
                card.sender.color = this.value;
                createCard(); break;
        }
    })
}
caption_input.addEventListener("input", function(){
    card.caption.str = caption_input.value;
    createCard();
});

description_input.addEventListener("input", function(){
    card.description.str = description_input.value;
    createCard();
});

destination_input.addEventListener("input", function(){
    card.destination.str = destination_input.value;
    createCard();
});

sender_input.addEventListener("input", function(){
    card.sender.str = sender_input.value;
    createCard();
});

var p = document.createElement("p");
menu.appendChild(p);
p.innerText = "Выберите цвет заливки: "
var bgColorsDiv = document.createElement("div");
menu.appendChild(bgColorsDiv);

for( var i = 0; i < bgColors.length; i++){
    var bgColor = document.createElement("div");
    bgColorsDiv.appendChild(bgColor);
    bgColor.classList.add("bgColor");
    bgColor.setAttribute("style", "background-color:" + bgColors[i]);
    bgColor.setAttribute("id", i);
    bgColor.addEventListener("click", function(){
        card.color = bgColors[this["id"]]
        createCard();
    })
}


