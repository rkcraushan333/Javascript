// Basic Stack Implementation

class Stack {
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element);
    }
    pop() {
        if (this.size() > 0) {
            this.stack.pop();
        }
    }
    size() {
        return this.stack.length;
    }
    top() {
        return this.stack[this.size() - 1];
    }
    isEmpty() {
        return this.stack.size() === 0;
    }
}

const st = new Stack();
st.push(5);
st.push(8);
st.push(81);
st.push(12);
while (st.size() > 0) {
    console.log(st.top());
    st.pop();
}
