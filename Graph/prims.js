class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}

let mst = [];
function PrimsAlgorithm(adj, n) {
    let vis = new Array(n).fill(false);
    let pq = new PriorityQueue((a, b) => a.first - b.first);

    let mstVal = 0;
    pq.push(new Pair(0, new Pair(0, -1)));

    while (!pq.isEmpty()) {
        let t = pq.pop();
        let wt = t.first;
        let node = t.second.first;
        let p = t.second.second;

        if (!vis[node]) {
            for (let i of adj[node]) {
                if (!vis[i.first]) pq.push(new Pair(i.second, new Pair(i.first, node)));
            }
            if (p !== -1) mst.push([p, node]);
            mstVal += wt;
            vis[node] = true;
        }
    }
    return mstVal;
}
