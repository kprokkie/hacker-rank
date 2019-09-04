function plusMinus(arr) {
    let plusN, negN;
    plusN = negN = 0;
    arr.forEach(value => {
        if (value > 0) plusN++;
        else if (value < 0) negN++;
    });

    console.log((plusN / arr.length).toFixed(6));
    console.log((negN / arr.length).toFixed(6));
    console.log(((arr.length - (plusN + negN)) / arr.length).toFixed(6));
}

const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);