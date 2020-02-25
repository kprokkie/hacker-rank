/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {

    let stack = [];
    let str = [...s];

    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i] !== str[i - 1]) {
            stack.push(1);
        } else {
            let count = stack.pop();
            count = count + 1;
            stack.push(count);

            if (count === k) {
                stack.pop();
                let index = i - k + 1;
                str.splice(i - k + 1, k);
                i = index - 1;
            }
        }
    }
    return str.join('');

};

console.log(removeDuplicates('deeedbbcccbdaa', 3));
console.log(removeDuplicates('abcd', 2));
console.log(removeDuplicates('pbbcggttciiippooaais', 3));
console.log(removeDuplicates('', 2));