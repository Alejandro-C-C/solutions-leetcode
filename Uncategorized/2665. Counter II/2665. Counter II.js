var createCounter = function(init) {
    let c = init;
    return  {
        increment:function(){
            c++;
            return c;
        },
        decrement:function(){
            c--;
            return c;
        },
        reset:function(){
            c=init;
            return c;
        },
    };
};