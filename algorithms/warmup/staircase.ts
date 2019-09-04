function staircase(n) {
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = n - 1; j >= 0; j--) {
            if (i >= j)
                str += '#';
            else
                str += ' ';    
        }
        console.log(str);
    }
}

staircase(10);