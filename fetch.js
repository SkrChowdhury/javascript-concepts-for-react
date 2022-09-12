//! 1. JSON => Stringify | Parse

const student = {
  name: 'Sakib Khan',
  age: 32,
  movies: ['King Khan', 'Dhakar Mastan'],
};

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

//! 2. fetch

fetch('url')
  .then((response) => response.json())
  .then((data) => console.log(data));

//! keys, values
const keys = Object.keys(student);
const values = Object.values(student);

//! for
const numbers = [12, 23, 45, 34, 6, 77, 65, 43];
numbers.forEach((num) => console.log(num));
numbers.map((num) => num * 2);

//! for of on array like object
//! for in on object

const products = [
  {
    name: 'laptop',
    price: 32444,
    brand: 'lenevo',
    color: 'silver',
  },
  {
    name: 'phone',
    price: 7000,
    brand: 'iphone',
    color: 'golden',
  },
  {
    name: 'watch',
    price: 3000,
    brand: 'casio',
    color: 'yellow',
  },
  {
    name: 'sunglass',
    price: 300,
    brand: 'ray bean',
    color: 'black',
  },
  {
    name: 'camera',
    price: 9000,
    brand: 'cannon',
    color: 'gray',
  },
];

const newProduct = [ name: 'webcam', price:3456, brand:'anker'];

//! copy products array and then add new product

const newProducts = [...products,newProduct];
console.log(newProducts);

//! create a new array without one specific item
//! remove phone means create a new array without phone

const remaining = products.filter(product => product.name!=='phone');