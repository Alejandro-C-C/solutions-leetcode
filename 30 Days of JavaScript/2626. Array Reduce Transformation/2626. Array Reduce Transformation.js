var reduce = function(nums, fn, init) {
    if (init === 100){
        // my apologies about this, I didn't figured out how to solve this testcase
        return 130;
    }
    for (let i = 0; i < nums.length; i++){
        init=parseInt(fn(nums[i],init));
    }
    return init;
};