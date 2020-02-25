// Type 1

// let person = {
//     fName: 'Pradeep',
//     lName: 'Kumar',
//     printName: function(location) {
//         return `${this.fName} ${this.lName} at ${location}`;
//     }
// }

// console.log(person.printName('Delhi'));

// let person2 = {
//     fName: 'Vandit',
//     lName: 'Vyas'
// }

// // function borrowing
// console.log(person.printName.call(person2, 'Mumbai'));

// Type 2
// let person = {
//     fName: 'Pradeep',
//     lName: 'Kumar'
// }

// let printName = function(location) {
//     return `${this.fName} ${this.lName} at ${location}`;
// }

// console.log(printName.call(person, 'Delhi'));

// let person2 = {
//     fName: 'Vandit',
//     lName: 'Vyas'
// }

// // function borrowing
// console.log(printName.call(person2, 'Mumbai'));

// Type 3
// let person = {
//     fName: 'Pradeep',
//     lName: 'Kumar'
// }

// let printName = function(location, country, when) {
//     return `${this.fName} ${this.lName} at ${location} in ${country}, ${when}`;
// }

// console.log(printName.call(person, 'Delhi', 'India', 'Today'));

// let person2 = {
//     fName: 'Vandit',
//     lName: 'Vyas'
// }

// // call -- seprated args
// console.log(printName.call(person2, 'Mumbai', 'India', 'Yesterday'));
// // apply -- args []
// console.log(printName.apply(person2, ['Mumbai', 'India', 'Tommorrow']));

// // bind -- more like call but return copy of function that can be executed later
// let printNameCopy = printName.bind(person, 'Delhi', 'India')
// console.log(printNameCopy);
// console.log(printNameCopy());
// console.log(printNameCopy('Today')); // does it make sense -- yes

// Type 4
// Polyfill for Bind Method
// Normal 
let person = {
    fName: 'Pradeep',
    lName: 'Kumar'
}

let printName = function (location, country) {
    return `${this.fName} ${this.lName} at ${location}, ${country}`;
}

let printNameBindCopy = printName.bind(person, 'Delhi', 'India');
console.log(printNameBindCopy());

// Latest Bind
Function.prototype.latestBind = function(...args) {
    let obj = this, args1 = args.slice(1);
    return function(...args2) {
        // return obj.call(args[0], args1, args2);
        // or
        return obj.apply(args[0], [...args1, ...args2]);
    }
}

let printNameLatestBindCopy = printName.latestBind(person, 'Delhi');
console.log(printNameLatestBindCopy('India'));

// Test
// let name = {
//     firstname: "Akshay",
//     lastname: "Saini"
//   }
  
//   let printName = function (hometown, state, country) {
//     return this.firstname + " " + this.lastname + " , " + hometown + ", " + state + ", " + country;
//   }
  
//   let printMyName = printName.bind(name, "Dehradun", "Uttarakhand");
//   console.log(printMyName( "India"));
  
//   Function.prototype.mybind = function(...args){
//     let obj = this,
//       params = args.slice(1);
//     return function (...args2) {
//       obj.apply(args[0], [...params, ...args2]);
//     }
//   }
  
//   let printMyName2 = printName.mybind(name, "Dehradun", "Uttarakhand");
//   console.log(printMyName2( "India"));








