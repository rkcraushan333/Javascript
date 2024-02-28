// function palindrom(str) {
//     let arr = str.split('').reverse().join('');
//     return arr === str;
// }
// let str = "helgwqh"
// console.log(palindrom(str));

function shufle(arr) {
    res = [];
    arr2 = [];
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        arr2[i] = 0;
    }
    let cnt = 0;
    while (cnt < n) {
        let x = Math.floor((Math.random() * n));
        if (arr2[x]) {
            continue;
        }
        else {
            arr2[x] = 1;
            res.push(arr[x]);
            cnt++;
        }
    }
    return res;
}
let arr = [2, 3, 4, 1]
arr1 = shufle(arr);
console.log(arr1);

// Math.max()
// string = "2"
// n = 2

// Given a linked list, write a function to reverse every k nodes.
// 1 2 3 4 5 6 => 2
// 2 1 4 3 6 5



