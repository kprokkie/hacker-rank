const root5 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: { val: 4, left: null, right: null }
    },
    right: {
        val: 7,
        left: { val: 4, left: null, right: null },
        right: { val: 3, left: null, right: null }
    }
};

const subroot5 = {
    val: 7,
    left: { val: 4, left: null, right: null },
    right: { val: 3, left: null, right: null }
};

const root9 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: { val: 4, left: null, right: null }
    },
    right: {
        val: 7,
        left: { val: 4, left: null, right: null },
        right: { val: 13, left: null, right: null }
    }
};

function compareTree(s, t) {

    if (!s && !t) return true;
    if (!s || !t) return false;

    if (s.val !== t.val) return false;
    return compareTree(s.left, t.left) && compareTree(s.right, t.right);


}

console.log('Compare Tree');
console.log(compareTree(root5, root5));
console.log(compareTree(root5, root9));

function checkSubTree(s, t) {
    if (!s || !t) return false;

    let queue = [];
    queue.push(s);

    while(queue.length) {
        let curr = queue.shift();

        if (compareTree(curr, t)) return true;

        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }
    return false;
}

console.log('Check SubTree');
console.log(checkSubTree(root5, root5));
console.log(checkSubTree(root5, root9));
console.log(checkSubTree(root5, subroot5));

