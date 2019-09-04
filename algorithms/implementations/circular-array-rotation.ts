function circularArrayRotation(a, k, queries) {
    k = k % a.length;
    let result = [];
    queries.forEach((q) => {
        let i = q - k >= 0 ? q - k : q - k + a.length;
        result.push(a[i]);
    });
    return result;
}

const arr = [1, 2, 3];
const rotations = 2;
const indexArr = [0, 1, 2];

console.log(circularArrayRotation(arr, rotations, indexArr));