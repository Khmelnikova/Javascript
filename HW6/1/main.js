var comments = 0, elements = 0, text = 0;

function main(par){
    par.childNodes.forEach(function(e){
        console.log(e);
        switch (e.nodeType) {
            case 1: elements++;break;
            case 3: text++;break;
            case 8: comments++;break;
        }
        if(e.nodeType == 1 && e.childNodes != []) {
            main(e);
        }
    })
}
main(document);
console.log("Тегов " + elements);
console.log("Текстовых узлов " + text);
console.log("Комментариев " + comments);