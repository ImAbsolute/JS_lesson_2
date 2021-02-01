let a = 7;
let b = 5;
let x = -2;
let y = -8;


function one(arg1, arg2) {
    if (arg1 > 0 && arg2 > 0) {
        let x = arg1 - arg2;
        console.log(x);
    } else if (arg1 < 0 && arg2 < 0) {
        let x = arg1 * arg2;
        console.log(x);
    } else if ((arg1 < 0 || arg1 > 0) && (arg2 < 0 || arg2 > 0)) {
        let x = arg1 + arg2;
        console.log(x);
    }
}

// one(a, b);
// one(x, y);
// one(a, y);

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function two() {
    let a = randomNumber(0, 15);
    switch (a) {
        case 0:
            console.log(0);
        case 1:
            console.log(1);
        case 2:
            console.log(2);
        case 3:
            console.log(3);
        case 4:
            console.log(4);
        case 5:
            console.log(5);
        case 6:
            console.log(6);
        case 7:
            console.log(7);
        case 8:
            console.log(8);
        case 9:
            console.log(9);
        case 10:
            console.log(10);
        case 11:
            console.log(11);
        case 12:
            console.log(12);
        case 13:
            console.log(13);
        case 14:
            console.log(14);
        case 15:
            console.log(15);
            break;

    }
}

// two();

function operationPlus(arg1, arg2) {
    let summ = arg1 + arg2;
    return summ;
}
// console.log(operationPlus(a, b));

function operationMinus(arg1, arg2) {
    let minus = arg1 - arg2;
    return minus;
}
// console.log(operationMinus(a, x));

function operationMultiplication(arg1, arg2) {
    let multiplication = arg1 * arg2;
    return multiplication;
}

function operationDivide(arg1, arg2) {
    let divide = arg1 / arg2;
    return divide;
}


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'operationPlus':
            operationPlus(arg1, arg2);
            break;
        case 'operationMinus':
            operationMinus(arg1, arg2);
            break;
        case 'operationMultiplication':
            operationMultiplication(arg1, arg2);
            break;
        case 'operationDivide':
            operationDivide(arg1, arg2);
            break;
    }
}

console.log(mathOperation(a, b, operationPlus));