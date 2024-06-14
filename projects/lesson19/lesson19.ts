// Aliases
type firstType = number | string | boolean;
type secondType = number | string;

function addNumberOrString2(a: firstType, b: secondType) { // UNION types
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

console.log(">>> check:", addNumberOrString2('Toan ', '9'));