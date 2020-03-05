
// Types matters

const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function addInputs(num1: number, num2: number) {
    return num1 + num2;
}

button.addEventListener("click", function() {
    console.log(addInputs(+input1.value, +input2.value))
});


// Number, string, boolean

// function add(n1, n2, showResult, resultPhrase)

function add(n1:number, n2:number, showResult:boolean, resultPhrase:string) {

    const result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    } else {
        return result;
    }
}

const n1 = '5'; 
const n2 = 2.8;
const showResult = true;
const resultPhrase = 'Result is: '

add(+n1, +n2, showResult, resultPhrase)


// ================================================


// Object, array and tuple

// const person = {
const person: {
    name: string;
    age: number; 
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],  // array
    role: [2, 'author']              // tuple
};

person.role.push('admin'); // will be allowed as a tuple
// person.role[1] = 10;       // will not be allowed as a tuple
// person.role = [0, 'admin', 'user']   // will not be allowed as a tuple

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

console.log(person.role)

//===================================================


// Enum

// //           0      1          2         // default
// enum Role { ADMIN, READ_ONLY, AUTHOR };  // often, all-uppercase
// // defined to num or string 
// enum Role { ADMIN = 10, READ_ONLY = 100, AUTHOR = 1000};  
enum Role { ADMIN = 'Admin', READ_ONLY = 'Read only', AUTHOR = 'Author'};

const person = {
    name: 'John',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
}

if (person.role === Role.AUTHOR) {
    console.log('is author')
}

// ==========================================

