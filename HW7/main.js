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
    }
}
