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


console.log(userName)
