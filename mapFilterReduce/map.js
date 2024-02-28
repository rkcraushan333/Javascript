// Polyfill own  map

Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

const nums = [1, 2, 3, 4];
// val => each values, i => each index, arr => the array provided or the address of array 
const m3 = nums.myMap((val, i, arr) => {
    return val * 3;
})
console.log(m3)