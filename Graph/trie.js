class TrieNode {
    constructor() {
        this.child = [];
        for (let i = 0; i < 26; i++) {
            this.child[i] = null;
        }
        this.flag = false;
    }

    check(c) {
        return this.child[c.charCodeAt(0) - 'a'.charCodeAt(0)] !== null;
    }

    put(c, node) {
        this.child[c.charCodeAt(0) - 'a'.charCodeAt(0)] = node;
    }

    get(c) {
        return this.child[c.charCodeAt(0) - 'a'.charCodeAt(0)];
    }

    setEnd() {
        this.flag = true;
    }

    isLast() {
        return this.flag;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.check(word[i])) {
                node.put(word[i], new TrieNode());
            }
            node = node.get(word[i]);
        }
        node.setEnd();
    }

    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.check(word[i])) {
                return false;
            }
            node = node.get(word[i]);
        }
        return node.isLast();
    }

    startsWith(prefix) {
        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            if (!node.check(prefix[i])) {
                return false;
            }
            node = node.get(prefix[i]);
        }
        return true;
    }
}

