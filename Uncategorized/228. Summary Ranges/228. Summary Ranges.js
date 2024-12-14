var summaryRanges = function(nums) {
    let result= [];
    let r1=nums[0],r2=nums[0];
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i]+1==nums[i+1]){
            r2=nums[i+1];
        }
        else{
            if(r1==r2)result.push(`${r1}`);
            else result.push(r1+"->"+r2);
            r2=nums[i+1];
            r1=r2;
        }

    }
    return result;
};