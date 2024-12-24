var invertTree = function(root) {
    if(root == null) return root;
    else {
        invertTree(root.left); 
        invertTree(root.right); 
        let aux;
        aux=root.left;
        root.left=root.right;
        root.right=aux;
    }
    return root;
};