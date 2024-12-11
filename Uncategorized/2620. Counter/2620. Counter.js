var i = 0;
var num=99999999;
var createCounter = function(n) {   
    return function() {
        if(n==num){
            i++; 
        }
        else{
            num=n;
            i=0;
        }
        return n+i;
    };
};
