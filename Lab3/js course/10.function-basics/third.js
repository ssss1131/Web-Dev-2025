function pow(x, n) {
    let res = x;

    for (let i = 1; i < n; i++) {
        res *= x;
    }

    return res;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert( pow(x, n) );
}