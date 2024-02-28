// Lexical Scope : Ability to access it's parent and upper parent scope
// Closures : CombN of function and Bundled of Lexical environment

// let x1 = "Hello";
// function makeFun() {
//     var name = "Mozilla";
//     function displayName(str) {
//         console.log(`${x1} ${name} ${str}`);
//     }
//     return displayName;
// }

// var myFun = makeFun();
// myFun("Firefox");
// makeFun()("Firefox")


// # Closure Scope chain
// global scope
// const e = 10;
// function sum(a) {
//     // a = 1
//     return function (b) {
//         // b = 2
//         return function (c) {
//             // c = 3
//             // outer functions scope
//             return function (d) {
//                 // d = 4
//                 // local scope
//                 return a + b + c + d + e;
//             };
//         };
//     };
// }

// console.log(sum(1)(2)(3)(4)); // 20
// var sum1 = sum(5);
// var sum2 = sum1(5);
// var sum3 = sum2(5);
// console.log(sum3(5));

// Q1. What will be logged to console?

// let count = 0;
// (function printCount() {
//     if (count === 0) {
//         let count = 1;
//         console.log(count);
//     }
//     console.log(count);
// })(); // IIFE ... Immediately Invoked Function Expression

// Q2. Write createBase funtion that will allow you to do this.

// function createBase(val) {
//     return function addSix(innerval) {
//         console.log(innerval + val);
//     }
// }

// var addSix = createBase(6);
// addSix(10) // returns 16
// addSix(32) // returns 38

// Q3. Time Optimization

// function find(index) {
//     let a = [];
//     for (let i = 0; i < 1000000; i++) {
//         a[i] = i * i;
//     }
//     console.log(a[index]);
// }

// Above optimization using closure
function find() {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }
    return function (index) {
        console.log(a[index]);
    }
}
var closure = find();
console.time("6");
closure(6);
console.timeEnd("6")
console.time("12");
closure(12)
console.timeEnd("12");



