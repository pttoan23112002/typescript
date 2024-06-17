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

// Lesson 32 Function Overloading
function add32(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    if (typeof a === 'string' && typeof b === 'string') return a + b;
}

function add32_1(a: number, b: number): number;

function add32_1(a: string, b: string): string;

function add32_1(a: any, b: any) { return a + b };

console.log(">>> Check add new:", add32_1(6, 9), add32_1("Thanh ", "Toan"));

// Lesson 33 Classes
class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName = (): string => {
        return `${this.firstName} ${this.lastName}`;
    }
}

let hs1 = new Person("1", "Thanh", "Toan");
console.log(hs1.getFullName());

// Lesson 34 Access Modifiers
class Employee {
    protected empCode: string;
    private empName: string;

    constructor(empCode: string, empName: string) {
        this.empCode = empCode;
        this.empName = empName;
    }
}

let emp = new Employee("1", "Toan");
console.log('>>> Check:', emp);

// emp.empCode = "2";
// emp.empName = "Phuong";
// console.log('>>> Check:', emp);

class SaleEmployee extends Employee {
    private department: string;

    constructor(name: string, code: string, department: string) {
        super(name, code);
        this.department = department;
    }
}

let sEmp = new SaleEmployee("John Smith", "2", "Sale");
// emp.empCode;    

// Lesson 35 Readonly
class Person35 {
    readonly birthDate: Date;
    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

let person1 = new Person35(new Date(1999, 12, 25));
// person1.birthDate = new Date(2000, 12, 20);

// Lesson 36 Getters and Setters
class Person36 {

    private _age: number;
    private _fitstName: string;
    private _lastName: string;

    constructor(age: number, firstName: string, lastName: string) {
        this._age = age;
        this._fitstName = firstName;
        this._lastName = lastName;
    }

    // getters
    get age() {
        return this._age;
    }

    // setters
    set age(inputAge: number) {
        if (inputAge < 0 || inputAge > 150) {
            throw Error("Invalid Age");
        }
        this._age = inputAge;
    }
}

let p1 = new Person36(24, "Thanh", "Toan");
console.log(p1.age);
p1.age = 20;
console.log(p1.age);


//Lesson 37 Inheritance
class Person37 {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    describe(): string {
        return `This is ${this.firstName} ${this.lastName}`;
    }
}

class Employee37 extends Person37 {

    private jobTitle: string;

    constructor(firstName: string, lastName: string, jobTitle: string) {
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    //overwrite
    describe(): string {
        return `${super.describe()} - Describe from Employee37`;
    }
}

let emp37 = new Employee37("Thanh", "Toan", "DevJS");
console.log(emp37.getFullName());
console.log(emp37.describe());

// Lesson 38 Static
class Circle {

    static pi: number = 3.14;
    public test: number = 0;

    constructor() {

    }

    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
}

console.log("Check pi:", Circle.pi);
console.log("Check calculate:", Circle.calculateArea(10));

let t = new Circle();
console.log("Check test:", t.test);

// Lesson 39 Abstract
abstract class Employee39 {
    constructor(private firstName: string, private lastName: string) {

    }

    abstract getSalary(): number;

    // normal method
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month`;
    }
}

// let emp1 = new Employee39("Thanh", "Toan");

class FullTimeEmployee extends Employee39 {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}

class Contractor extends Employee39 {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}
let ftEmp = new FullTimeEmployee("Thanh", "Toan", 3000);
console.log(">>> Check FullTimeEmployee:", ftEmp.getSalary());

const c1 = new Contractor("Thanh", "Nhut", 5000, 20);
console.log(">>> Check Contractor:", c1.getSalary());
