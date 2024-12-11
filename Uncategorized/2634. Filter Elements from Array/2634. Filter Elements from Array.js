var filter = function(arr, fn) {
    let result = new Array(0);
    for (let i = 0 ; i < arr.length; i++){
        if(fn(arr[i],i)){
            result.push(arr[i]);
        }
    }
    return result;
};