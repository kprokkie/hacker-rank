function diagonalDifference(arr) {
    let d1, d2;
    d1 = d2 = 0;

    d1 += getPrimaryDiagonal(0, 0, arr);
    d2 += getSecondaryDiagonal(0, arr.length - 1, arr);
    return Math.abs(d1 - d2);
}

function getPrimaryDiagonal(i, j, arr) {
    if (i < arr.length)
        return arr[i][j] + getPrimaryDiagonal(i + 1, j + 1, arr);
    return 0;
}

function getSecondaryDiagonal(i, j, arr) {
    if (i < arr.length)
        return arr[i][j] + getSecondaryDiagonal(i + 1, j - 1, arr);
    return 0;
}

const arr2D = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

console.log(diagonalDifference(arr2D));