var framework = {
    append: function(t,w) {
        w.appendChild(t);
    },
    prepend: function(t,w) {
        w.insertBefore(t, w.firstChild);
    },
    remove: function(t) {
        t.remove();
    },
    create: function(s) {
        return document.createElement(s);
    },
    replace: function(t, w){
        w.parentNode.replaceChild(t, w);
    },
    event: function(t,e,f){ 
            if (typeof t.addEventListener(e,f) == "function"){ 
                t.addEventListener(e,f) 
            } 
            else {
                t.attachEvent("on" + e,f) 
            }
        },
    unevent: function(t, e, f) {
        if(typeof t.removeEventListener == "function") {
            t.removeEventListener(e, f);
        }
        else {
            t.detachEvent("on" + e, f)
        }
    },
    dispatch: function(t, e){
        var ev = new Event(e);
        t.dispatchEvent(ev);
    },
    Get: {
        byID: function(id){
            return document.getElementById(id)
        },
        bySelector: function(sel){
            return document.querySelector(sel)
        },
        byClass: function(className) {
            return document.getElementsByClassName(className)
        },
        byTag: function(tag) {
            return document.getElementsByTagName(tag)
        },
        bySelectorAll: function(selAll) {
            return document.querySelectorAll(selAll)
        }
},
    width: function(e){
        return e.clientWidth;
    },
    height: function(e) {
        return e.clientHeight;
    },
    pageTop: function(e){
        return e.getBoundingClientRect().top;
    },
    pageLeft: function(e){
        return e.getBoundingClientRect().left;
    },
    css: function (){
        var e, p, v;
        if( arguments.length == 2) {
            return arguments[0].style[arguments[1]];
        }
        if( arguments.length == 3) {
            arguments[0].style[arguments[1]] = arguments[2];
        }
    }
    
}
