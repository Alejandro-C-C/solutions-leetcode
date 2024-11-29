var mergeAlternately = function(word1, word2) {
    fWord="";
    f=false;
    x=word1.length+word2.length;
    for (let i = 0; i < x;i++){
        if(f){
            fWord+=word2[0];
            word2=word2.substring(1);
        }else{
            fWord+=word1[0];
            word1=word1.substring(1);
        }
        if(word1 === ""){
            return fWord+word2;
        }
        if(word2 === ""){
            return fWord+word1;
        }
        f=!f;
    }
};