const node = {
    value: 3,
    left: {
        value: 9,
        left: null,
        right: null
    },
    right: {
        value: 20,
        left: {
            value: 15,
            left: null,
            right: null
        },
        right: {
            value: 7,
            left: null,
            right: null
        }
    }
};

function maxDepth(node) {
    function helper(node) {
        if (!node) return 0;
        else {
            let leftDepth = helper(node.left);
            let rightDepth = helper(node.right);
            return Math.max(leftDepth, rightDepth) + 1;
        }
    }
    return helper(node);
}

console.log(maxDepth(node));
