function birthdayCakeCandles(ar) {
    let max = Math.max(...ar);
    let count = 0;
    ar.forEach(value => {
        if (max === value)
            count++;
    });
    return count;
}

const arr = [3, 2, 1, 3];
console.log(birthdayCakeCandles(arr));