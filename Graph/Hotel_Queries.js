"use strict";
process.stdin.setEncoding(
);
process.stdin.resume();

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
            return string.replace(/\s+/g, " ").trim();
        });
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function readIntArr() {
    return readLine().split(" ").map(Number);
}

function print(x, s = "") {
    process.stdout.write(x + s);
}

let st = [];
let arr;
function build(s, e, node = 1) {
    if (s === e) {
        st[node] = arr[s];
        return;
    }
    let mid = Math.floor((s + e) / 2);
    build(s, mid, 2 * node);
    build(mid + 1, e, 2 * node + 1);
    st[node] = Math.max(st[2 * node], st[2 * node + 1]);
}
function query(s, e, val, node = 1) {
    if (s === e) {
        st[node] -= val;
        return s + 1;
    }
    let mid = Math.floor((s + e) / 2);
    let ans;
    if (st[2 * node] >= val) {
        ans = query(s, mid, val, 2 * node);
    }
    else {
        ans = query(mid + 1, e, val, 2 * node + 1);
    }
    st[node] = Math.max(st[2 * node], st[2 * node + 1]);
    return ans;
}
function inforkc() {
    let [n, q] = readIntArr();
    arr = readIntArr();
    build(0, n - 1);
    let v = readIntArr();
    for (let i = 0; i < q; i++) {
        if (st[1] < v[i]) {
            print(0, " ");
        }
        else {
            print(query(0, n - 1, v[i]), " ");
        }
    }
}

function main() {
    let t = 1;
    while (t--) {
        inforkc();
    }
}

