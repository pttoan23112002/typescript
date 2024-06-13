// PROMISE
enum API_STATUS {
    PENDING,
    FULFILLED = 'FULFILLED',
    REJECTED = 10
};

//constant
//java

let a1 = API_STATUS.PENDING;
let a2 = API_STATUS.FULFILLED;
console.log('>a1 =', a1, '\n>a2 =', a2);

function doSomeThing(enum1: API_STATUS, enum2: API_STATUS, enum3: API_STATUS) {
    console.log('doSomeThing:', enum1, enum2, enum3);
}

doSomeThing(API_STATUS.PENDING, API_STATUS.FULFILLED, API_STATUS.REJECTED);