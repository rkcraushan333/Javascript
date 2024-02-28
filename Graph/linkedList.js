// LinkedList in javascript

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    size() {
        let cnt = 0;
        let currNode = this.head;
        while (currNode) {
            cnt++;
            currNode = currNode.next;
        }
        return cnt;
    }
    addFirst(data) {
        // insert at start 
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    addLast(data) {
        // insert at end 
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let tempNode = this.head;
        while (tempNode.next) {
            tempNode = tempNode.next;
        }
        tempNode.next = newNode;
    }
    addAt(index, data) {
        if (index < 0 || index > this.size) {
            console.log("Index Error");
            return;
        }
        if (index == 0) {
            this.addFirst(data);
            return;
        }
        let newNode = new Node(data);
        let currNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            currNode = currNode.next;
        }
        newNode.next = currNode.next;
        currNode.next = newNode;
    }
    removeTop() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }
    removeLast() {
        if (!this.head) {
            return;
        }
        let currNode = this.head;
        while (currNode.next.next) {
            currNode = currNode.next;
        }
        currNode.next = null;
    }
    removeAt(index) {
        if (index < 0 || index > this.size) {
            console.log(`index error!`);
            return;
        }
        if (index == 0) {
            this.removeTop();
        }
        let currNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            currNode = currNode.next;
        }
        currNode.next = currNode.next.next;
    }
    print() {
        let currNode = this.head;
        while (currNode) {
            console.log(currNode.data);
            currNode = currNode.next;
        }
    }
}

let ll = new LinkedList();
ll.addFirst(5);
ll.addFirst(3);
ll.addFirst(8);
ll.addLast(6);
// ll.print();
// console.log(ll.size());
ll.removeAt(2);
ll.addAt(1, 1)
ll.print();
