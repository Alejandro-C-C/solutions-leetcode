var hammingWeight = function(n) {
    let str = converToBin(n);
    return str.split('1').length - 1;
};
var converToBin = function(n){
    if(n<=0) return "";
    return converToBin(Math.floor(n/2))+""+n%2;
};