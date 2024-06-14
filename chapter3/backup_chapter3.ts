// lesson 20
let age: number = 25;
if (age) { // Convert to Boolean type => Boolean(age)
    console.log('high');
} else if (age >= 18) {
    console.log('normal');
} else {
    console.log('low');
}

// lesson 29
const sum29 = (x: number, y: number, z?: number) => {
    if (z) return x + y + z;
    return x + y;
}

console.log("Check sum29:", sum29(2, 5, 10));

// lesson 30 Default Parameters
let sum30 = (x: number, y: number = 10, z = false) => {
    if (!z) return x + y;
    return x - y;
}

console.log("Check sum30:", sum30(1, 2));
console.log("Check sum30:", sum30(1, 10, true));

// Lesson 31 Rest parameters

const getTotal = (...numbers: number[]): number => {
    let total = 0;
    numbers.forEach(item => total += item);
    return total;
}

console.log("Total:", getTotal());
console.log("Total:", getTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log("Total:", getTotal('toan', 2));

const multiply = (n: number, ...m: number[]) => {
    return m.map(item => n * item);
}
let result = multiply(100, 1, 2, 3, 4, 5);
console.log('Check result:', result);

const greeting = (greet: string, ...names: string[]) => {
    return greet + ", " + names.join(' & ') + "!";
}
console.log(greeting('Xin chao', 'Toan', 'Nhut'));