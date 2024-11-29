var reverseVowels = function(s) {
    s = s.split('');
    let temp;
    let iB;
    let jB;
    let i = 0;
    let j = s.length;
    while(i<=j){
        switch(s[i]){
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                iB=true;
                break;
            default:
                iB=false;
                i++;
                break;
        }
        switch(s[j]){
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                jB=true;
                break;
            default:
                jB=false;
                j--;
                break;
        }
        if(iB && jB){
            temp=s[i];
            s[i]=s[j];
            s[j]=temp;
            i++;
            j--;
        }
    }
    s = s.join('');
    return s;

};