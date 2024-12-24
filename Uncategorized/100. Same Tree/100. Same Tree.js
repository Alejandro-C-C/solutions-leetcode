var isSameTree = function(p, q) {
    if (p == null && q == null) return true; 
    if (p == null || q == null) return false; 
    if (p.val !== q.val) return false;
    let nRight = isSameTree(p.right,q.right);
    let nLeft = isSameTree(p.left,q.left);
    return (nLeft && nRight);  
};