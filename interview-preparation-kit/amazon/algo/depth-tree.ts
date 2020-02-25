function depthTree (node) {

    function helper (node) {
        if (!node) return 0;
        return Math.max(helper(node.left), helper(node.right)) + 1;
    }
    
    return helper(node);
}

const root = {
    val: 1,
    right: {val: 3, right: null, left: null},
    left:
    {
        val: 2,
        right: {val: 5, right: null, left: null},
        left: {val: 4, right: null, left: null}
    }
};

console.log(depthTree(root));