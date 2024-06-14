function handleException(errMessage: string): never { // Không trả kết quả
    throw Error(errMessage);
}
let timeNow: Date = new Date();
// handleException(`ERROR ${timeNow.getDay()}/${timeNow.getMonth()}/${timeNow.getFullYear()}`);

function runInfinity(): never {
    // console.log("running in runInfinity()");
    while (true) {
        console.log("running...");
    }
}

let a = runInfinity();
console.log(">>> check a:", a);
// let b = handleException('hihi');
// console.log(">>> check b:", b);