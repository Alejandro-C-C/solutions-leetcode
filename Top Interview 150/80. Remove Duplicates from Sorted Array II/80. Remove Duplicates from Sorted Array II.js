var removeDuplicates = function(nums) {
    let current = undefined;
    let total = 0;
    let i = 0;
    while(i < nums.length){
        if (current == undefined || nums[i]!=current){
            current = nums[i];
            count = 1;
        }
        if(count > 2){
            nums.splice(i,1);
        }
        else i++;
        count++;
    }
    return nums.length;
};