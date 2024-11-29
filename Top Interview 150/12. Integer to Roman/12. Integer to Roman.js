var intToRoman = function(n) {
    let result = "";
    if (n>=1000){
        let m=(parseInt(n/1000));
        n-=parseInt(1000*parseInt((n/1000)));
        for (let i = 0;  i < m ; i ++ ){
            result+="M";
        }
    }
    if(n>=100){
        let c=(parseInt(n/100));
        n-=parseInt(100*parseInt((n/100)));
        if (c>=5){
            if(c===9){
                result+="CM";
            }
            else{
                result+="D";
                for(let i = 0 ; i < (c-5); i++){
                    result+="C";
                }
            }
        }
        else if (c===4){
            result+="CD";
        }
        else{
            for (let i = 0 ; i < c; i++){
                result+="C";
            }
        }
    }
    if(n>=10){
        let d=(parseInt(n/10));
        n-=parseInt(10*parseInt((n/10)));
        
        if (d>=5){
            if(d===9){
                result+="XC";
            }
            else {
                result+="L";
                for(let i = 0 ; i < d-5; i++){
                    result+="X";
                }
            } 
        }
        else if (d===4){
            result+="XL";
        }
        else{
            for(let i = 0 ; i < d; i++){
                result+="X";
            }
        }
    }
    if (n>=1){
        let u=parseInt(n);
        if (u>=5){
            if(u===9){
                result+="IX"
            }
            else{
                result+="V";
                for(let i = 0; i < u-5;i++){
                    result+="I";
                }
            }
        }
        else if (u===4){
            result+="IV";
        }
        else{
            for(let i = 0; i < u;i++){
                result+="I";
            }
        }
    }
    return result;
};