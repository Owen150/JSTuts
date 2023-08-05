let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is' + name + 'and I am' + age + 'years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties & Methods
const s = new String('Hello World');    // Turning a String into a String Object i.e Rem, >const s = 'Hello World';

x = typeof s;

x = s.length;

// Access Value by Key
x = s[1];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('d');

x = s.substring(0, 5);

x = s.substring(7);     // Displays everything starting from index 7 onwards

x.slice(-11, -6);

x = '       Hello World';

x = x.trim();

x = s.replace('World', 'John');

x = s.includes('Hello');

x = s.valueOf();

x = s.split('');

console.log(x);