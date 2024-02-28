// implement stack using queues based on prototype function method

var MyStack = function () {
    this.q1 = [];
    this.q2 = []; // as a helper for pushing to make q1 act like stack
}

MyStack.prototype.push = function (value) {
    // Pushes element x to the top of the stack
    while (this.q1.length > 0) {
        this.q2.push(this.q1.shift())
    }
    this.q1.push(value);
    while (this.q2.length > 0) {
        this.q1.push(this.q2.shift())
    }
}

MyStack.prototype.pop = function () {
    // Removes the element on the top of the stack and returns it
    return this.q1.shift();
}

MyStack.prototype.top = function () {
    // Returns the element on the top of the stack
    return this.q1[0];
}

MyStack.prototype.empty = function () {
    // Returns true if the stack is empty, false otherwise
    return this.q1.length === 0;
}