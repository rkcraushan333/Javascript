/*
Ordered_set -> functionalities
1 -> insert in O(logn)
2 -> remove in O(logn)
3 -> find_by_order(k) in O(logn) => K-th element in a set (counting from zero).
4 -> order_of_key (k) in O(logn) => Number of items strictly smaller than k.
*/
let segTree = [];
function insert(x, s, e, node = 1) {
    if (s == e) {
        segTree[node]++;
        return;
    }
    let mid = Math.floor((s + e) / 2);
    if (x <= mid) {
        insert(x, s, mid, 2 * node);
    }
    else {
        insert(x, mid + 1, e, 2 * node + 1);
    }
    segTree[node] = segTree[2 * node] + segTree[2 * node + 1];
}
function remove(x, s, e, node = 1) {
    if (s == e) {
        segTree[node]--;
        return;
    }
    let mid = Math.floor((s + e) / 2);
    if (x <= mid) {
        insert(x, s, mid, 2 * node);
    }
    else {
        insert(x, mid + 1, e, 2 * node + 1);
    }
    segTree[node] = segTree[2 * node] + segTree[2 * node + 1];
}
function find_by_order(x, s, e, node = 1) {
    if (s == e) {
        return s;
    }
    let mid = Math.floor((s + e) / 2);
    if (segTree[2 * node] >= x) {
        return find_by_order(x, s, mid, 2 * node);
    }
    else {
        return find_by_order(x - segTree[2 * node], mid + 1, e, 2 * node + 1);
    }
}

function order_of_key(l, r, s, e, node = 1) {
    if (s > r || e < l)
        return 0;
    if (s >= l && e <= r)
        return segTree[node];
    let mid = Math.floor((s + e) / 2);
    let left = order_of_key(l, r, s, mid, 2 * node);
    let right = order_of_key(l, r, mid + 1, e, 2 * node + 1);
    return left + right;
}
function inforkc() {
    let s = 1, e = 1e5;
    for (let i = 0; i <= 400001; i++) {
        // keep sum of all the frequency only
        segTree[i] = 0;
    }
    insert(2, s, e);
    insert(2, s, e);
    insert(3, s, e);
    insert(7, s, e);
    insert(8, s, e);
    insert(20, s, e);
    // for (let i = 0; i < 15; i++) {
    //     console.log(segTree[i]);
    // }
    // console.log(order_of_key(1, 19, s, e)); // sum of 1 to k-1
    for (let i = 1; i <= 6; i++) {
        console.log(find_by_order(i, s, e));
    }
}
inforkc();