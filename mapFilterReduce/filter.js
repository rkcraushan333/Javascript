// polyfill for filter 

Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) temp.push(this[i]);
    }
    return temp;
}
const nums = [2, 1, 3, 4, 6, 7]
const div2 = nums.myFilter((value, index, array) => {
    return (value % 2) === 0;
})

console.log(div2);