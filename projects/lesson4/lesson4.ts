const sum3 = (x: number, y: number) => {
    return x + y;
}
// No error
console.log(">> Check sum3 =", sum3(5, 10));
// Error
// console.log(">> Check sum3 =", sum3(5, '10'));