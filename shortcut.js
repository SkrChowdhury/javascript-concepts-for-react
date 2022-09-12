//! Truthy:    'text', 5, true, {}, []
//! Falsy:    '', 0, false, undefined

//Check Truthy
let myVar = 5;
// check any truthy
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}

let myMoney = 50;

//you check negative or falsy anything
if (!myMoney) {
}

const money = 80;
let food;
if (money > 100) {
  food = 'biriyani';
} else {
  food = 'Cha Biscuit';
}

//! ternary

let food1 = money > 100 ? 'biriyani' : 'cha biscuit';
console.log(food1);

let drink = money > 100 && myVar > 100 ? 'coke' : 'Filter water';
console.log(drink);

//! number to string conversion
const num1 = 52;
const numString = num1 + '';
conaole.log(num1);

//! String to number
const input = '560';
inputNumber = +input;

//! ------------------------------------
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
//1st way
isActive ? showUser() : hideUser();
// 2nd way
// usee && if the left side is true then right side willl be executed.
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

//!------------------------------------
// toggle boolean
isActive = !isActive;