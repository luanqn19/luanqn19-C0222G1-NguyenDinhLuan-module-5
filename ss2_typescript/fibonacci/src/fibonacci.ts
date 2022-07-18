let input: number = 8;
let f1: number = 1;
let f2: number = 1;
let f: number;
let sum: number = f1 + f2;

function sumOfFibonacci(a: number): number {
    if (a <= 2) return sum;
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