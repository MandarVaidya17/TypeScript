function cube(a) {
    return a * a * a;
}
function printmsg() {
    console.log("hello student");
}
var number = 2;
var ans1 = cube(number);
console.log(ans1);
printmsg();
function add(a, b) {
    return a + b;
}
var sum = add(10, 20);
console.log(sum);
function addition(a, b, c) {
    return a + b + (c || 0);
}
console.log(addition(10, 20, 20));
function findpower(base, pow) {
    if (pow === void 0) { pow = 2; }
    return Math.pow(base, pow);
}
console.log("power:", findpower(10, 3));
