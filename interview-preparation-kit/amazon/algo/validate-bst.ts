const root5 = {
    val: 10,
    left: {
        val: 6,
        left: { val: 3, left: null, right: null },
        right: { val: 8, left: null, right: null }
    },
    right: {
        val: 15,
        left: null,
        right: { val: 20, left: null, right: null }
    }
};

const root2 = {
    val: 1,
    left: {
        val: 2,
        left: { val: 3, left: null, right: null },
        right: { val: 4, left: null, right: null }
    },
    right: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 3, left: null, right: null }
    }
};

function checkLeft(node) {
    if (node.left) {
        if (node.val < node.left.val) return false;
        return validateBST(node.left);
    }
    return true;
}

function checkRight(node) {
    if (node.right) {
        if (node.val > node.right.val) return false;
        return validateBST(node.right);
    }
    return true;
}

function validateBST(root) {
    if (!root) return true;
    let curr = root;
    return checkLeft(curr) && checkRight(curr);
}

console.log(validateBST(root5));
console.log(validateBST(root2));