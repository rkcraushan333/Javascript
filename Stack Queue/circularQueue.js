// a circular queue has a fixed size
// front and rear fun, isFull and isEmpty fun,push and pop operation
// implementing using prototype functions (can't use arrow function in prototype becoz they don't have this context)

var myCircularQueue = function (k) {
    this.queue = [];
    this.size = k;
}
myCircularQueue.prototype.enQueue = function (value) {
    if (this.size === this.queue.length) {
        // circular queue is full, so cann't insert now
        return false;
    }
    this.queue.push(value);
    return true;
}

myCircularQueue.prototype.deQueue = function () {
    if (this.queue.length === 0) {
        return false;
    }
    this.queue.shift();
    return true;
}

myCircularQueue.prototype.Front = function () {
    if (this.queue.length === 0) {
        return -1;
    }
    return this.queue[0];
}

myCircularQueue.prototype.Rear = function () {
    if (this.queue.length === 0) {
        return -1;
    }
    return this.queue[this.queue.length - 1];
}

myCircularQueue.prototype.isEmpty = function () {
    return this.queue.length === 0;
}

myCircularQueue.prototype.isFull = function () {
    return this.queue.length === this.size;
}

// [4,2,5]
var obj = new myCircularQueue(3);
obj.enQueue(1);
obj.enQueue(4);
obj.enQueue(2);
obj.deQueue();
console.log(obj.enQueue(5)); console.log(obj.Front(), obj.Rear());