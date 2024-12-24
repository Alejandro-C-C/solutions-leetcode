var maxDepth = function(root) {
    if(root==null) return 0;
    let nRight = root.right != null ? maxDepth(root.right):0;
    let nleft = root.left != null?maxDepth(root.left):0;
    let i = nRight > nleft? nRight:nleft;
    return ++i;
};