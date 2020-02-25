// Create a basic Car object with functions accelerate and deccelerate. 
// Now create two cars with separate starting speeds and perform this set of speed changes on them.

function Car() {
    this.speed = 0;
    this.accelerate = (inc) => {
        this.speed += inc;
    };
    this.deaccelerate = (dec) => {
        this.speed -= dec;
    }
    this.getSpeed = () => {
        return this.speed;
    }
}

let car1 = new Car();
let car2 = new Car();

car1.accelerate(10);
car1.deaccelerate(2);
console.log(car1.getSpeed());

car2.accelerate(20);
car2.deaccelerate(5);
console.log(car2.getSpeed());



// function Car () {
//     this.speed = 10;
// }

// Car.prototype.accelerate = (change) => {
//     console.log(this.speed);
//     this.speed += change;
// }

// Car.prototype.deaccelerate = (change) => {
//     this.speed -= change;
// }

// Car.prototype.getSpeed = () => {
//     return this.speed;
// }

// let car1 = new Car();
// let car2 = new Car();

// car1.accelerate(10);
// car1.deaccelerate(2);
// console.log(car1.speed);
// console.log(car1.getSpeed());

// car2.accelerate(20);
// car2.deaccelerate(5);
// console.log(car2.getSpeed());



