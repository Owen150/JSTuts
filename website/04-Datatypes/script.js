// String
const firstName = 'Sara';

// Number
const age = 30;
const temp = 98.9;

//Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 900765490376n;

// Reference Types
const numbers = [1, 2, 3, 4, 5];

const person = {
    name: 'brad'
};


function sayHello() {
    console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);