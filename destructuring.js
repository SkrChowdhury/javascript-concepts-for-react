//! 1. Array Destructuring

const numbers = [23, 56];

const [x, y] = [23, 56];
// or
const [m, n] = numbers;

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
const [first, second] = boxify(90, 34);
console.log(first, second);

const student = {
  name: 'Sakib Khan',
  age: 32,
  movies: ['King Khan', 'Dhakar Mastan'],
};

const [firstMovie, secondMovie] = student.movies;

//! Object Destructuring
const { name, age } = { name: 'alu', age: 13 };

const { name, age } = { id: 12, name: 'alu', salary: 34000, age: 13 };

const employee = {
    ide: 'VS CODE',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'CSS', 'JS'];
    specification: {
        height: 66,
        weight: 67,
        address: 'Kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 2333,
            brand: 'garmin',
        }
    }
}

const {machine,ide} = employee;
const { weight, address} = employee.specification;
const { brand} = employee?.specification?.watch;
