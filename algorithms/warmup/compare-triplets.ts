function compareTriplets(a, b) {
    let a1, b1;
    a1 = b1 = 0;
    for (let i = 0; i < a.length && a.length === b.length; i++) {
        if (a[i] > b[i]) a1++;
        else if (a[i] < b[i]) b1++;
    }
    return [a1, b1];
}

const a = [17, 28, 30];
const b = [99, 16, 8];

console.log(compareTriplets(a, b));