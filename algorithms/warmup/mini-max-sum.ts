function miniMaxSum(arr) {
    let min, max, sum;
    min = max = sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i];
        sum += value;
        if (value > max)
            max = value;
        else if (value < min)
            min = value;
    }
    return [sum - max, sum - min];
}

const arr = [1, 2, 3, 4, 5];
console.log(miniMaxSum(arr));