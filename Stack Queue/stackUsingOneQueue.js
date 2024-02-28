var Stack = function () {
    this.q = [];
}

Stack.prototype.push = function (x) {
    let n = this.q.length;
    this.q.push(x);
    for (let i = 0; i < n; i++) {
        this.q.push(this.q.shift());
    }
}

Stack.prototype.pop = function () {
    return this.q.shift();
}

Stack.prototype.top = function () {
    return this.q[0];
}

Stack.prototype.empty = function () {
    return this.q.length === 0;
}