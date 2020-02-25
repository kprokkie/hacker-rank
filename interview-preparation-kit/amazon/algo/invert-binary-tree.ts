const node = {
    value: 4,
    left: {
        value: 2,
        left: {
            value: 1,
            left: null,
            right: null
        },
        right: {
            value: 3,
            left: null,
            right: null
        }
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 9,
            left: null,
            right: null
        }
    }
};

function invertTree(node) {

    if (!node) return null;

    let queue = [];
    queue.push(node);

    function swap(queue) {

        if (!queue.length) return;
        
        let current = queue.shift();
        console.log(current.value);

        let temp = current.left;
        current.left = current.right;
        current.right = temp;

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);

        swap(queue);
    }
    swap(queue);

    return node;
}

console.log(invertTree(node));