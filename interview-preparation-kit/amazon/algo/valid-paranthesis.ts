var isValid = function (s) {

    if (!s.length) return true;
    if ((s.length % 2)) return false;

    console.log('check');

    // mapping
    let hash = {};
    hash[')'] = '(';
    hash[']'] = '[';
    hash['}'] = '{';

    let stack = [];

    for (let paran of s) {
        if (!hash[paran])
            stack.push(paran);
        else
            if (stack.pop() !== hash[paran]) return false;
    }
    return !stack.length;
};

const pp = '((';
console.log(isValid(pp));