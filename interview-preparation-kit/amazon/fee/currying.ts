
// 1 Method: using Bind
let multiply = (x, y) => {
    return x * y;
};

console.log(multiply(2, 3));

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo);
console.log(multiplyByTwo(3));


let multiplyByTwo2 = multiply.bind(this, 2, 3);
console.log(multiplyByTwo2);
console.log(multiplyByTwo2(5));

let multiplyByTwo3 = multiply.bind(this);
console.log(multiplyByTwo3);
console.log(multiplyByTwo3(2, 3));

// 2 Method: using Closures
let newMultiply = (x) => {
    return (y) => {
        return x * y;
    }
}

console.log(newMultiply(2)(3));

let newMultiplyByTwo = newMultiply(2);
console.log(newMultiplyByTwo);
console.log(newMultiplyByTwo(3));



