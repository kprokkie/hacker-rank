const lcaNode = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};

function lowestAncestorBT(node, n1, n2) {

    let st1 = [];
    let st2 = [];

    function findPath(node, n, st) {
        st.push(node.val);

        if (node.val === n) return true;
        if (node.left && findPath(node.left, n, st)) return true;
        if (node.right && findPath(node.right, n, st)) return true;

        st.length -= 1;
    }

    // findPath(node, n1, st1);
    // findPath(node, n2, st2);

    if (!findPath(node, n1, st1) || !findPath(node, n2, st2)) {
        return -1;
    }

    let i;
    for (i = 0; i < st1.length && st2.length; i++) {
        if (st1[i] === st2[i]) continue;
        break;
    }

    return st1[i - 1];

}

// console.log(lowestAncestorBT(lcaNode, 5, 6));
// console.log(lowestAncestorBT(lcaNode, 4, 5));
// console.log(lowestAncestorBT(lcaNode, 2, 7));
// console.log(lowestAncestorBT(lcaNode, 5, 16));
// console.log(lowestAncestorBT(lcaNode, 5, 5));

const lcaBSTNode = {
    val: 20,
    left: {
        val: 8,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 12,
            left: {
                val: 10,
                left: null,
                right: null
            },
            right: {
                val: 14,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 22,
        left: {
            val: 21,
            left: null,
            right: null
        },
        right: {
            val: 30,
            left: null,
            right: null
        }
    }
};

function lowestAncestorBST(node, n1, n2) {

    // console.log(node.val);
    if (!node) return -1;

    if (node.val < n1 && node.val < n2)
        return lowestAncestorBST(node.right, n1, n2);

    if (node.val > n1 && node.val > n2)
        return lowestAncestorBST(node.left, n1, n2);

    return node.val;

}

// console.log(lowestAncestorBST(lcaBSTNode, 10, 14));
// console.log(lowestAncestorBST(lcaBSTNode, 14, 8));
// console.log(lowestAncestorBST(lcaBSTNode, 10, 22));
// console.log(lowestAncestorBST(lcaBSTNode, 4, 12));
console.log(lowestAncestorBST(lcaBSTNode, 24, 32));