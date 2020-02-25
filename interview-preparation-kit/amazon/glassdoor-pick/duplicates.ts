function dups(arr1, arr2) {
    let hash = {};
    let res = [];

    for (let val of arr1) {
        if (!hash[val]) hash[val] = val;
    }

    for (let val of arr2) {
        if (hash[val]) res.push(val);
    }

    return res;

}

const arr1 = [3, 6, 7, 9, 2, 5];
const arr2 = [1, 6, 8, 5, 4, 0];

console.log(dups(arr1, arr2));