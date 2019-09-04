function arrayManipulation(n, queries) {
    let arr = new Array(n);
    arr.fill(0);
    let max = 0;
    queries.forEach((q) => {
        for (let k = q[0] - 1; k <= q[1] - 1; k++) {
            arr[k] += q[2];
            max = arr[k] > max ? arr[k] : max;
        }
    });
    return max;
}

const queries = [
    [1, 2, 100], 
    [2, 5, 100],
    [3, 4, 100]
];

console.log(arrayManipulation(10, queries));