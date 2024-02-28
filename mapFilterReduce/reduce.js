// polyfill for reduce

Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}

let arr = [1, 2, 4, 5, 6];

const prod = arr.myReduce((acc, val, i, arr) => {
    return acc * val;
}, 0)
console.log(prod);