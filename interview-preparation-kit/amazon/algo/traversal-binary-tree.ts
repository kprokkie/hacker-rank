const node = {
    value: 10,
    left: {
        value: 6,
        left: {
            value: 3,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    },
    right: {
        value: 15,
        left: null,
        right: {
            value: 20,
            left: null,
            right: null
        }
    }
};

// 1. BFS 
console.log('BFS Traversal ---------------------------------');
// Iterative -- Memory Required: Queue
function traversalBFSIterative(node) {
    if (!node) return [];

    let result = [];
    let queue = [];

    queue.push(node);

    while (queue.length) {

        let current = queue.shift();
        result.push(current.value);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return result;
}

console.log('Iterative: ', traversalBFSIterative(node));

// Recursive -- Memory Required: Queue
function traversalBFSRecursive(node) {
    if (!node) return [];

    let result = [];
    let queue = [];

    queue.push(node);

    function helper() {
        if (!queue.length) return;

        let current = queue.shift();
        result.push(current.value);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);

        helper();
    }

    helper();
    return result;
}

console.log('Recursive: ', traversalBFSRecursive(node));

// ------------------------------------------------------------ //
// 2. DFS 
console.log('DFS Traversal -----------------------------------');
// Iterative -- Memory Required: Stack -- Needed WORK
function traversalDFSIterative(node) {
    if (!node) return [];

    let result = [];
    let stack = [];

    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left
        }

        node = stack.pop();
        result.push(node.value);
        node = node.right;
    }
    return result;
}

console.log('Iterative: ', traversalDFSIterative(node));

// Recursive -- No Memory Required
function traversalDFSRecursive(node, type) {
    if (!node) return [];

    let result = [];

    function helper(node) {
        if (!node) return;

        if (type === 'Preorder') result.push(node.value);
        if (node.left) helper(node.left);
        if (type === 'Inorder') result.push(node.value);
        if (node.right) helper(node.right);
        if (type === 'Postorder') result.push(node.value);
    }

    helper(node);
    return result;
}

console.log('Recursive -- Preorder :', traversalDFSRecursive(node, 'Preorder'));
console.log('Recursive -- Inorder  :', traversalDFSRecursive(node, 'Inorder'));
console.log('Recursive -- Postorder:', traversalDFSRecursive(node, 'Postorder'));