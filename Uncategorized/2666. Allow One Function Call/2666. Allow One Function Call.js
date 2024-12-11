var once = function(fn) {
    var f = false
    return function(...args){
        if (f==false){
            f=true;
            return fn(...args);    
        }
        
        return undefined;
    }
};
