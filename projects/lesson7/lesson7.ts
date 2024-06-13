//Type Inference - Tự động gán Type
let count7 = ''; // Không định nghĩa - TS tự động check type => string
count7 = 'toan';
console.log(">> Check count7:", count7);

let array7 = ['test1', 'test2', 'test3', 96]; // Không định nghĩa - TS tự động check type => (string | number)[]
array7.push(10);