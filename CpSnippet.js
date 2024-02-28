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

function inforkc() {
    // let n = readIntArr();
    // let arr = readIntArr();
    // let i = 0, j = n - 1;
    // while (i < j && arr[i] == 0) {
    //     i++;
    // }
    // while (j >= 0 && arr[j] == 0) {
    //     j--;
    // }
    // let ans = 0;
    // for (let x = i; x <= j; x++) {
    //     if (arr[x] == 0) ans++;
    // }
    // print(ans, "\n");
}

function main() {
    let t = readIntArr();
    while (t--) {
        inforkc();
    }

}

