var compose = function(functions) {
    
    return function(x) {
        let result = parseInt(x);
        for (let i = functions.length-1; i>=0; i--){
            let fn = functions[i];
            result=fn(result);
        }
        return result;
    }
};