
const t1 = {
    val: 1,
    right: { val: 2, right: null, left: null },
    left:
    {
        val: 3,
        right: null,
        left: { val: 5, right: null, left: null }
    }
};

const t2 = {
    val: 2,
    right:
    {
        val: 3,
        right: { val: 7, right: null, left: null },
        left: null
    },
    left:
    {
        val: 1,
        right: { val: 4, right: null, left: null },
        left: null
    }
};

function mergeBT(t1, t2) {
    if (!t1) return t2;
    if (!t2) return t1;

    t1.val += t2.val;
    t1.left = mergeBT(t1.left, t2.left);
    t1.right = mergeBT(t1.right, t2.right);
    return t1;
}

console.log(mergeBT(t1, t2));