// Currying is a function that takes an argument and returns another function expecting for next argument
// example  f(a,b) into f(a)(b)

// function f(a) {
//     return function (b) {
//         console.log(a + b);
//     }
// }
// f(5)(7);

// Question - Why should we use currying
/*
✅ It makes a function pure which makes it expose to less errors and side effects.

✅ It helps in avoiding the same variable again and again.

✅ It is a checking method that checks if you have all the things before you proceed.

✅ It divides one function into multiple functions so that one handles one set of responsibility.
*/

// Q1 -> Implement sum(2)(6)(1)
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
// console.log(sum(2)(6)(1))

/*
Question -> 
2 Implement
evaluate("sum")(4)(2) => 6
evaluate("multiply")(4)(2) => 8
evaluate("divide")(4)(2) => 2
evaluate("subtract")(4)(2) => 2
*/
function name(exp) {
    return function (a) {
        return function (b) {
            if (exp == "sum") return a + b;
            else if (exp == "multiply") return a * b;
            else if (exp == "divide") return a / b;
            else if (exp == "subtract") return a - b;
            else return "Invalid Expression";
        }
    }
}
// console.log(name("subtract")(5)(9));
const mul = name("multiply")
// console.log(mul(14)(12));
// console.log(mul(4)(32));


// Question 3:- Infinite Currying -> sum(1)(2)(4).....(n)

function sum(a) {
    return function (b) {
        if (!b) {
            return a;
        }
        else {
            return sum(a + b);
        }
    }
}
// console.log(sum(14)(12)(10)(13)(18)());

// Question 4 - Currying vs Partial Application
function add(a) {
    return function (b, c) {
        return a + b + c;
    }
}
// above function is not currying instead it is partial application of currying
// console.log(add(3)(5, 9));

// Question 5 -> Manipulating DOM
function updateElementText(id) {
    return function (content) {
        document.querySelector('#' + id).textContent = content;
    }
}
// const updateHeader = updateElementText("heading");
// updateHeader("Subscribe to Inforkc")
// updateHeader("Please Like, Share & Substribe")

// Question 6. Curry() implementation
// convert f(a,b,c) into f(a)(b)(c)

function curry(func) {
    return function curriedFun(...args) {
        if (args.length >= func.length) {
            return func(...args);
        }
        else {
            // return a function that expect next argument
            return function (...next) {
                return curriedFun(...args, ...next);
            }
        }
    }
}

const Sum = (a, b, c, d) => a + b + c + d;
const totalSum = curry(Sum);
console.log(totalSum(19)(21)(13)(14));