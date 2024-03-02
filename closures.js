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
// function find() {
//     let a = [];
//     for (let i = 0; i < 1000000; i++) {
//         a[i] = i * i;
//     }
//     return function (index) {
//         console.log(a[index]);
//     }
// }
// var closure = find();
// console.time("6");
// closure(6);
// console.timeEnd("6")
// console.time("12");
// closure(12)
// console.timeEnd("12");

//Round 2 => Q2 setTimeOut and Block Scope

// function a() {
//     for (var x = 0; x < 5; x++) {
//         function inner(x) {
//             setTimeout(function log() {
//                 console.log(x);
//             }, x * 1000)
//         }
//         inner(x)
//     }
// }
// a(); // As var is function scope so pass it inside a function


// Q5. How would you use a closure to create a private counter

// function counter() {
//     var _counter = 0;
//     function add(increment) {
//         _counter += increment;
//     }
//     function retrieve() {
//         return _counter;
//     }
//     return {
//         add,
//         retrieve
//     }
// }
// const c = counter();
// c.add(5);
// c.add(15);
// console.log(c.retrieve());

// Q6. Module Pattern

// var module = (function () {
//     function privateMethod() {
//         // do something
//         console.log("private");
//     }

//     return {
//         publicMethod: function () {
//             // can call privateMethod
//             console.log("public");
//         }
//     }
// })();
// module.publicMethod();
// module.privateMethod(); // can not be accessed

// Q7 . Make this Run only once
// let view;
// function likeTheVideo() {
//     let called = 0;
//     view = "inforkc";
//     return function () {
//         if (called) {
//             console.log("Already Subscribed");
//         }
//         else {
//             console.log("Subscribe to ", view);
//             called++;
//         }
//     }
// };
// let isSubscribed = likeTheVideo();
// isSubscribed()
// isSubscribed()
// isSubscribed()
// isSubscribed()

// More generic => Polyfill once (lodash)

// function once(func, context) {
//     let ran;
//     return function () {
//         if (func) {
//             ran = func.apply(context || this, arguments);
//             func = null;
//         }
//         return ran;
//     };
// }
// const hello = once(() => console.log("Hello")); // will be called once
// hello();
// hello();
// hello();
// hello();

// Q9. Polyfill of memoize

function memoize(funct, context) {
    const res = {};
    return function (...args) {
        const argCache = JSON.stringify(args);
        if (!res[argCache]) {
            res[argCache] = funct.call(context || this, ...args);
        }
        return res[argCache];
    }
}

var prod = (x, y) => {
    for (let i = 0; i < 10000000; i++) {
        // do something
    }
    return x * y;
}
const memoizedProd = memoize(prod);
console.time("Prod time1");
// prod(42824, 41241);
memoizedProd(42824, 41241)
console.timeEnd("Prod time1");
console.time("Prod time2");
// prod(42824, 41241);
memoizedProd(42824, 41241)
console.timeEnd("Prod time2");


// Difference between closure and scope
/*
  When we create a function inside another function => then inner function is called
  closure and these closure is generally returned so that you can use it at later time
  while Scope in javascript defines what variables you have access to, mainly of two types
  local and global scope.
  But in the case of Closure => we have global,inner and outer scope 
*/