var a;
var b;
var str = "hello";
a = str;
b = str;
console.log(a);
console.log(b);
var ans = a;
var ans1 = b;
var str1 = b;
if (typeof (str1) == "string") {
    str1 = b;
}
console.log(str1);
