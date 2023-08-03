// Ways to declare a variable
// var, let and const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming conventions
// - Only letters, numbers, underscores & dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

//Re-assigning Variables - using let
age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
    score += 1;
}

console.log(score);

const x = 100;

// An array
const arr = [1, 2, 3, 4];

console.log(arr);

arr.push(5);

console.log(arr);

// An object
const person = {
    name: 'brad'
};

console.log(person);

person.name = 'John';

console.log(person);

person.email = 'brad@gmail.com';

console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
    e = 11,
    f = 12;

console.log(d);

console.log(a);