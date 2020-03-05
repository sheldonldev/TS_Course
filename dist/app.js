"use strict";
// Unknown and Never
// Unknown
let userName;
let userInput; // unkown is more strict than any, is better than any
let userWhat;
userInput = 5;
userInput = 'Max';
userWhat = 'Anna';
// userName = userInput               // string not allow unknown
userName = userWhat; // string allow any
if (typeof userInput === 'string') {
    userName = userInput; // string allow checked unknown 
}
console.log(userName);
