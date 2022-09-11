//! 1. How to declare a variable using let and const

const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

//! 2. 6 basic conditions >, <, ===, !==. <==. >==
//! Multiple conditions: &&, ||

if (fatherName === 'arnold' || season === 'rainy') {
} else if (fatherName == 'Arnold') {
} else {
}

//! 3. Array
//! index,
//! length, push,
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

//! 4. for loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
}

//! 5. function

function multiply(a, b) {
  return a * b;
}
const output = multiply(2, 5);

//! 6. object
//! 3 ways to access property by name
const student = {
  name: 'Sakib Khan',
  age: 32,
  movies: ['King Khan', 'Dhakar Mastan'],
};

console.log(student.age); // direct by property
console.log(student['age']); // access via property name tring
const myVariable = 'age';
console.log(student[myVariable]); // access via property via name variable
