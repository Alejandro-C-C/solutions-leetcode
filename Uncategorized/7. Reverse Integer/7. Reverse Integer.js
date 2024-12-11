var reverse = function(x) {
    let number = x.toString();
    let isNegative;
    if (number[0]=='-'){
        isNegative=true;
        number.slice(1);
    }
    else {
        isNegative=false;
    }
    number=number.split("").reverse().join("");
    x=parseInt(number);
    if(x>=Math.pow(2,31)){
        return 0;
    }
    return isNegative?x*(-1):x;
};