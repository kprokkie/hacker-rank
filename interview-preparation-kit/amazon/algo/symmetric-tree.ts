const root5 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: { val: 4, left: null, right: null }
    },
    right: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 3, left: null, right: null }
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

function symmetricTree(node) {
    if (!node) return false;

    let queue = [];
    queue.push(node.left);
    queue.push(node.right);

    while (queue.length) {
        let l = queue.shift();
        let r = queue.shift();

        if (!l && !r) continue;
        if (!l || !r) return false;
        if (l.val !== r.val) return false;

        queue.push(l.left);
        queue.push(r.right);
        queue.push(l.right);
        queue.push(r.left);
    }
    return true;
}


console.log(symmetricTree(root2));
console.log(symmetricTree(root5));