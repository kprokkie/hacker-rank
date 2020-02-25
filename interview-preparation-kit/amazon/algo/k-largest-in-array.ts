const arr = [1, 23, 12, 9, 30, 2, 50];

function kBubble(arr, k) {

    for (let i = 0; i < k; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.slice(arr.length - k).reverse();
}

console.log('Bubble Method');
console.log(kBubble(arr.slice(), 3));


function kMaxHeap(arr, k) {

    let maxHeap = [];

    function insertHeap(val) {
        maxHeap.push(val);

        // bubble up
        let index = maxHeap.length - 1;
        while (index > 0) {
            let pIndex = Math.floor((index - 1) / 2);
            if (maxHeap[pIndex] > maxHeap[index]) break;
            let temp = maxHeap[index];
            maxHeap[index] = maxHeap[pIndex];
            maxHeap[pIndex] = temp;
            index = pIndex;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        insertHeap(arr[i]);
    }

    console.log(maxHeap);

    let result = [];

    function extractMaxHeap() {
        let max = maxHeap[0];
        maxHeap[0] = maxHeap[maxHeap.length - 1];
        maxHeap.length = maxHeap.length - 1;

        let pIndex = 0;
        if (pIndex < maxHeap.length - 1) {
            let lIndex = 2 * pIndex + 1;
            let rIndex = 2 * pIndex + 2;

            if (!!maxHeap[lIndex] && maxHeap[pIndex] < maxHeap[lIndex]) {
                if (!!maxHeap[rIndex]) {
                    if (maxHeap[pIndex] < maxHeap[rIndex]) {
                        if (maxHeap[lIndex] < maxHeap[rIndex]) {
                            // swap by rIndex
                            let temp = maxHeap[pIndex];
                            maxHeap[pIndex] = maxHeap[rIndex];
                            maxHeap[rIndex] = temp;

                            pIndex = rIndex;
                        } else {
                            // swap by lIndex
                            let temp = maxHeap[pIndex];
                            maxHeap[pIndex] = maxHeap[lIndex];
                            maxHeap[lIndex] = temp;

                            pIndex = lIndex;
                        }
                    }
                } else {
                    // swap by lIndex
                    let temp = maxHeap[pIndex];
                    maxHeap[pIndex] = maxHeap[lIndex];
                    maxHeap[lIndex] = temp;

                    pIndex = lIndex;
                }
            }
        }

        return max;
    }


    for (let i = 0; i < k; i++) {
        result.push(extractMaxHeap());
    }

    return result;

}


console.log('Max Heap Method');
console.log(kMaxHeap(arr.slice(), 3));