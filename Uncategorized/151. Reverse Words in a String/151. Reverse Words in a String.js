var reverseWords = function(s) {
    let temp = "";
    let result = "";
    for(let i = s.length-1; i >= 0; i--){
        if(s[i]!=' '){
            temp+=s[i];
        }
        else {
            if(result[result.length-1]!=' ') result+=" ";
            result+=temp.split("").reverse().join("");
            temp="";
        }
    }
    if(temp.length>0){
        if(result[result.length-1]!=' ') result+=" ";
        result+=temp.split("").reverse().join("");
    }
    if(result[result.length-1]==' ') return result.slice(1,result.length-1);
    return result.slice(1);
};