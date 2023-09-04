let x;

// Array Literal
const numbers = [13, 55, 67, 99];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];

x = numbers[0] + numbers[2];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';

fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x = fruits;

console.log(x);