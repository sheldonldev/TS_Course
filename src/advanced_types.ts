
// Union types, literal types, alian types

type Addable = number | string;                     // alian + union
type ConversionDescriptor = 'as_number' | 'as_text' // alian + union + literal

function add(
    n1: Addable,                         // alian
    n2: number | string,                 // union
    // resultType: string
    resultType: ConversionDescriptor     // alian
) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultType === 'as_number'){
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }

    // if (resultType === 'as_number') {
    //     return +result;
    // } else {
    //     return result.toString;
    // }

    return result
}

console.log(add(30, 26, 'as_number'))
console.log(add('30', '26', 'as_text'))
console.log(add('Anna', 'Bill', 'as_text'))

// ==================================


// Function, function var, call back

function add2(n1: number, n2: number) {
    return n1 + n2
}

function printResult(num: number): void {
    console.log('Result: ' + num)
}                                      // void, no return value

function printResult2(num: number): undefined {
    console.log('Result: ' + num)
    return;                            // same as above, rarelly used
}    

printResult(add2(6, 9));
console.log(printResult(add2(6, 9)))    // print 'undefined'


// Function Var

// let value;              // default type: any
// let value: Function;    // better
// let value: () => number;   // much better
let value: (a: number, b: number) => number; // much much better

value = add2;  // store add function to var value

console.log(value(8, 8))


// Call back function

function addAndHandle(
    n1: number, 
    n2: number, 
    callBack: (num: number) => void
) {
    const result = n1 + n2;
    callBack(result)
}

addAndHandle(10, 20, (result) => {
    console.log(result);
})

// ===============================================


// Unknown and Never

// Unknown
let userName: string;
let userInput: unknown;               // unkown is more strict than any, is better than any
let userWhat: any;

userInput = 5;
userInput = 'Max'

// userName = userInput               // string not allow unknown
userName = userWhat                   // string allow any
if (typeof userInput === 'string') {
    userName = userInput              // string allow checked unknown 
}


// Never

function generateError(
    message: string,
    code: number,
): never {                     // never return, will disrupt our scripts
    throw { message: message, errorCode: code };
}

generateError('An error occurred!', 1);


