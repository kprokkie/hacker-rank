const root10 = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: { val: 7, left: null, right: null },
            right: { val: 2, left: null, right: null }
        },
        right: null
    },
    right: {
        val: 8,
        left: { val: 13, left: null, right: null },
        right: {
            val: 4,
            left: null,
            right: { val: 1, left: null, right: null }
        }
    }
};


function pathSum(node, sum) {
    if (!node) return false;

    if (!node.left && !node.right) return sum === node.val;

    let lPath = pathSum(node.left, sum - node.val);
    let rPath = pathSum(node.right, sum - node.val);

    return lPath || rPath;
}

console.log(pathSum(root10, 22));

function maxPathSum(node, sum) {
    if (!node) return false;

    if (!node.left && !node.right) return sum + node.val;

    let lPath = maxPathSum(node.left, sum + node.val);
    let rPath = maxPathSum(node.right, sum + node.val);

    return Math.max(lPath, rPath);
}

console.log(maxPathSum(root10, 0));