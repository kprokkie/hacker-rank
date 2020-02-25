const unsorted = [14, 33, 27, 35, 10, 12, 90, 23, 55, 45];

function bubbleSort(unsorted) {
    let arr = unsorted.slice();

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log('Bubble Sort:    ', bubbleSort(unsorted));

function insertionSort(unsorted) {
    let arr = unsorted.slice();

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
console.log('Insertion Sort: ', insertionSort(unsorted));

function selectionSort(unsorted) {
    let arr = unsorted.slice();

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) minIndex = j;
        }

        // swap 
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

    }
    return arr;
}
console.log('Selection Sort: ', selectionSort(unsorted));

const couting = [1, 4, 1, 2, 7, 5, 2];

function countingSort(couting) {
    let arr = couting.slice();

    let countArr = new Array(10).fill(0);

    for (let i = 0; i < arr.length; i++) {
        countArr[arr[i]] = ++countArr[arr[i]];
    }

    for (let i = 1; i < countArr.length; i++) {
        countArr[i] += countArr[i - 1];
    }

    let placeArr = new Array(arr.length)

    for (let i = 0; i < arr.length; i++) {
        placeArr[countArr[arr[i]]] = arr[i];
        countArr[arr[i]]--;
    }

    placeArr.splice(0, 1);
    return placeArr;
}
console.log('Counting Sort:  ', countingSort(couting));

function mergeSort(unsorted) {
    let arr = unsorted.slice();

    function merge(arr, l, m, r) {
        let n1 = m - l + 1;
        let n2 = r - m;

        let lArr = [], rArr = [];

        for (let i = 0; i < n1; i++) {

        }
    }

    function sort(arr, l, r) {
        if (l < r) {
            let m = (l + r) / 2;

            sort(arr, l, m);
            sort(arr, m + 1, r);

            merge(arr, l, m, r);
        }
    }

    sort(arr, 0, arr.length);
    return arr;
}
console.log('Merge Sort:     ', mergeSort(unsorted));