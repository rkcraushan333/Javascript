class Graph {
    constructor() {
        this.adj = [];
    }
    addVertex(n) {
        if (!this.adj[n]) {
            this.adj[n] = [];
        }
    }
    addEdge(a, b) {
        if (!this.adj[a]) {
            this.adj[a] = [];
        }
        if (!this.adj[b]) {
            this.adj[b] = [];
        }
        this.adj[a].push(b);
        this.adj[b].push(a);
    }
};
let g = new Graph();
let n = 5;
for (i = 0; i < n; i++) {
    g.addVertex(i);
}
let edges = [[0, 1], [0, 2], [0, 3], [2, 4]];
for (let [a, b] of edges) {
    g.addEdge(a, b);
}
let st = new Set();
function dfs(adj, s) {
    st.add(s);
    console.log(s);
    for (let child of adj[s]) {
        if (st.has(child)) continue;
        else dfs(adj, child);
    }
}
function bfs(adj, s) {
    let q = [];
    q.push(s);
    st.add(s);
    while (q.length > 0) {
        let t = q.shift();
        console.log(t);
        for (let child of adj[t]) {
            if (!st.has(child)) {
                q.push(child);
                st.add(child);
            }
        }
    }
}
// dfs(g.adj, 0);
// bfs(g.adj, 0);

