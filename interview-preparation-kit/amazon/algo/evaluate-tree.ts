let expression = 'ab+ef*g*-';

class ENode {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

function isOperator(operator) {
    if (operator == '+' ||
        operator == '-' ||
        operator == '*' ||
        operator == '/' ||
        operator == '^') return true;
    return false;
}

function inOrder(node) {
    let expression = '';

    function helper (node) {
        if (!node) return;
        helper(node.left);
        expression += node.data;
        helper(node.right);
    }
    helper (node);
    return expression;
}

function constructTree(expression) {

    let stack = [];
    let t, t1, t2;

    for (let char of expression) {
        // console.log(char);
        if (!isOperator(char)) {
            // push operand to stack
            t = new ENode(char);
            stack.push(t);
        } else {
            // pop two operand
            t1 = stack.pop();
            t2 = stack.pop();

            t = new ENode(char);
            t.right = t1;
            t.left = t2;

            stack.push(t);
        }
    }

    return stack.pop();
}

console.log(inOrder(constructTree(expression)));
// input: ab+ef*g*-
// expected: a + b - e * f * g
// result:  a+b-e*f*g
 