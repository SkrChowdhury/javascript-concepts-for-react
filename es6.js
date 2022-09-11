const numbers = [89, 35, 98, 12];

const student = {
  name: 'Sakib Khan',
  age: 32,
  movies: ['King Khan', 'Dhakar Mastan'],
};

const about = `
//! 1. Template String
My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;

//! 2. Arrow function
const getFiftyFive = () => 55; // no parameter
const addSixtyFive = num => num + 65; //single parameter
const isEven = x = x%2 ==0;
const addThree = (x,y,z) => x + y + z; // more than one parameter
const doMath = 9num1.num2 => { // multiline arrow function
    const sum = num1 + num2;
    return sum;
}


//! 3. Spread Operator
const newNumbers =[...numbers];
numbers.push(34);
numbers.push(67); //push will be for numbers

//create a new array from an older array and add an element
const currentNumbers = [...numbers, 45, 6,78]