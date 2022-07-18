var input = 8;
var f1 = 1;
var f2 = 1;
var f;
var sum = f1 + f2;
function sumOfFibonacci(a) {
    if (a <= 2)
        return sum;
    else {
        console.log("a: " + a);
        f = f1 + f2;
        console.log("f: " + f);
        f1 = f2;
        console.log("f1: " + f1);
        f2 = f;
        console.log("f2: " + f2);
        sum += f;
        console.log("sum: " + sum);
        return sumOfFibonacci(a - 1);
    }
}
console.log("Tổng fibonacci với n = " + input + " là : " + sumOfFibonacci(input));
