function findShortestSubArray(arr) {

    let leftHash = {};
    let rightHash = {};
    let countHash = {};

    for (let i = 0; i < arr.length; i++) {
        if (leftHash[arr[i]] === undefined) leftHash[arr[i]] = i;
        rightHash[arr[i]] = i;
        countHash[arr[i]] = ++countHash[arr[i]] || 1;
    }

    let result = arr.length;
    let degree = Math.max(...Object.values(countHash));
    for (let key in countHash) {
        if (countHash[key] === degree) {
            result = Math.min(result, rightHash[key] - leftHash[key] + 1);
        }
    }

    return result;
}

const arr1 = [1, 2, 2, 3, 1];
console.log(findShortestSubArray(arr1));

const arr2 = [1, 2, 2, 3, 1, 4, 2];
console.log(findShortestSubArray(arr2));