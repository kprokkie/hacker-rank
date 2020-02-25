// DOM Node
const domNode = document.body;

// DFS: Pre Order
function dfsOnHTMLNodes(node) { // PreOrder

    let stack = [];
    stack.push(node);

    while (stack.length) {
        let currNode = stack.pop();

        // console.log(currNode);

        // chilnodes
        if (currNode && currNode.childNodes && currNode.childNodes.length) {
            for (let i = currNode.childNodes.length - 1; i >= 0; i--) {
                stack.push(currNode.childNodes[i]);
            }
        }

        // children
        // if (currNode && currNode.children && currNode.children.length) {
        //     for (let i = 0; i < currNode.children.length; i++) {
        //         stack.push(currNode.children[i]);
        //     }
        // }
    }
}


dfsOnHTMLNodes(domNode);

// BFS: Level Order
function bfsOnHTMLNodes(node) {

    let queue = [];
    queue.push(node);

    while (queue.length) {

        let currNode = queue.shift();

        console.log(currNode);

        if (currNode && currNode.childNodes && currNode.childNodes.length) {
            for (let i = 0; i < currNode.childNodes.length; i++) {
                queue.push(currNode.childNodes[i]);
            }
        }
    }

}

bfsOnHTMLNodes(domNode);
