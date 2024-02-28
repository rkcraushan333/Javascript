class Queue {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        // shift to remove from first and unshift to add from start
        if (this.size() > 0) {
            this.items.shift();
        }
    }
    front() {
        if (this.size() > 0) {
            return this.items[0];
        }
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
}

let q = new Queue();
q.push(5);
q.push(15);
q.push(51);
q.push(521);
while (q.size() > 0) {
    console.log(q.front());
    q.pop();
}