var hIndex = function(citations) {
    if(citations==[0])return 0;
    citations.sort((a, b) => a - b);
    let ans = 0;
    let max = citations[citations.length-1];
    for(let i = citations.length-1; i>=0;i--){
        max = citations[i];
        if(max<=citations.length-i) return Math.max(max,citations.length-i-1);
    }
    return citations.length;
};