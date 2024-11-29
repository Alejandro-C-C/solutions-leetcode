var map = function(arr, fn) {
    let result = new Array(arr.length)
    for (let i = 0 ; i < arr.length;i++){
        arr[i]=fn(arr[i],i);
    }
    return arr;
};