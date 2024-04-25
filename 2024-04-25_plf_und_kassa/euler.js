function fact(n) {
    if (n <= 1) {
        return 1;
    }
    return n * fact(n - 1);
}
function euler() {
    let rw = 1;
    for (let i = 1; i <= 50; i++) {
        rw += 1 / fact(i);
        console.log(Math.E - rw);
    }
    return rw;
}
console.log(fact(4));
console.log(fact(5));
console.log(fact(6));
console.log(euler());
