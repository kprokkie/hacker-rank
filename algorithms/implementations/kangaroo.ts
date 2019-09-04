function kangaroo(x1, v1, x2, v2) {
    let meet = '';

    if (v1 === v2) {
        meet = x1 === x2 ? 'YES' : 'NO';
        return meet;
    }

    let jump = (x1 - x2) / (v2 - v1);
    meet = jump > 0 && Number.isInteger(jump) ? 'YES' : 'NO';

    return meet;
}

console.log(kangaroo(0, 3, 4, 2));