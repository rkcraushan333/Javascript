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

class LinkedList {
    constructor(val) {
        this.data = val
        this.next = null;
    }
};
class ll {
    constructor() {
        this.head = new LinkedList(0);
    }
    insert(x) {
        if (this.head.data === 0) {
            // insert at first index
            this.head.data = x;
            return;
        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = new LinkedList(x);
    }
    reversek(k) {
        // reverse in k group
    }
    size() {
        let temp = this.head;
        let cnt = 0;
        while (temp !== null) {
            temp = temp.next;
            cnt++;
        }
        return cnt;
    }
    print() {
        let temp = this.head;
        while (temp !== null) {
            print(temp.data, " ");
            temp = temp.next;
        }

    }
};

function inforkc() {
    let arr = readIntArr();
    let list = new ll();
    for (let i = 0; i < arr.length; i++) {
        list.insert(arr[i]);
    }
    let [k] = readIntArr();
    // let ans = list.reversek(k);
    list.print();
}

function main() {
    let t = 1;
    while (t--) {
        inforkc();
    }

}