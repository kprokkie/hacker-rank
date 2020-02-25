/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    // console.log(root);

    if (!root) return 0;
    if (!root.left && !root.right) return 0;

    let ans = 1;

    function depth(node) {
        if (node === null) return 0;
        // console.log('l---------------',node);
        let l = depth(node.left);
        // console.log('r---------------',node);
        let r = depth(node.right);

        ans = Math.max(ans, l + r + 1);
        return Math.max(l, r) + 1;
    }

    depth(root);
    return ans - 1;
};

const root1= {
    val: 1,
    right: {val: 3, right: null, left: null},
    left: null
};

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

console.log(diameterOfBinaryTree(root));