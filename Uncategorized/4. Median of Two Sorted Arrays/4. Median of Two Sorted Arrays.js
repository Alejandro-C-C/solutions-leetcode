var findMedianSortedArrays = function(nums1, nums2) {
    const total = nums1.concat(nums2);
    total.sort((a, b) => a - b);
    let len = total.length;
    return len%2==0?(total[Math.floor(len/2)]+total[(Math.floor(len/2))-1])/2:total[Math.floor(len/2)];    
};