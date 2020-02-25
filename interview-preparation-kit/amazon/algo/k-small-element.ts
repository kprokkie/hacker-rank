

function findKsmallestElementArray(arr, k) {

    let bArr = [];
    let kSmallest;

    // create min binary heap
    for (let val of arr) {
        bArr = createBinaryHeap(bArr, val);
    }

    // extract min binary heap
    // while (k) {
        kSmallest = extractBinaryHeap(bArr);
        k--;
    // }

    console.log(kSmallest);

}

function extractBinaryHeap(arr) {
    let smallest = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.splice(arr.length - 1);

    // sink down
    let pIndex = 0;

    while (pIndex < arr.length - 1) {

        console.log(pIndex, arr);

        let lIndex = 2 * pIndex + 1;
        let rIndex = 2 * pIndex + 2;

        if (arr[lIndex] < arr[rIndex]) {
            if (arr[lIndex] < arr[pIndex]) {
                let temp = arr[lIndex];
                arr[lIndex] = arr[pIndex];
                arr[pIndex] = temp;
                pIndex = lIndex;
            }
        } else {
            if (arr[rIndex] < arr[pIndex]) {
                let temp = arr[rIndex];
                arr[rIndex] = arr[pIndex];
                arr[pIndex] = temp;
                pIndex = rIndex;
            }
        }
    }

    return smallest;
}

function createBinaryHeap(arr, val) {
    arr.push(val);
    let index = arr.length - 1;

    // bubble up
    while (index > 0) {
        let pIndex = Math.floor((index - 1) / 2);
        if (arr[pIndex] < arr[index]) break;
        let temp = arr[pIndex];
        arr[pIndex] = arr[index];
        arr[index] = temp;
        index = pIndex;
    }

    return arr;
}

const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(findKsmallestElementArray(arr, k));