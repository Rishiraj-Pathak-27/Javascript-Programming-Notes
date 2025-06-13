// Datatypes in JS

// Numbers -> contains various whole numbers these can be either +ve or -ve
// declaration of numbers

let num1 = 3.14; // can be treated as float automatically
let num2 = 10;
console.log(num1 + num2);

// Strings -> always return the result as characters in double or single quotes

let firstName = "John";
let lastName = 'Doe';

console.log(firstName + " " + lastName);

// Booleans -> Always reutrn the result in 'true' or 'false'

let isLoggedIn = true;
console.log(isLoggedIn);
// OR
isLoggedIn = !false;
console.log(isLoggedIn);

isLoggedIn = false;
console.log(isLoggedIn);
// OR
isLoggedIn = !true;
console.log(isLoggedIn);

// NULL -> always return the result as an empty value, but this contains some space

let lastLoggedIn = null;
console.log(lastLoggedIn);

// Undefined -> it results into undefined as a user has not declared or assigned anything to the variable

let lastLoggedInDate = undefined;
console.log(lastLoggedInDate);

// Objects -> these are used to hold the properties/data and are always in a key:value pair
// Object Literals
const empData = {
  firstName: "Rishiraj",
  lastName: "Pathak",
  empId: "emp67",
  age: 19,
  lastLoggedInDate: undefined,
  isLoggedIn: true,
};

console.log(empData);

// Basic Operators in JS

// +
// -
// *
// /

let numOne = 10;
let numTwo = 30;

let result1 = numOne + numTwo;
let result2 = numOne - numTwo;
let result3 = numOne * numTwo;
let result4 = numOne / numTwo;
console.log(result1, result2, result3, result4);

// Playing with Booleans
// In JS we treat true -> 1 & false -> 0

if (true == 0) {
  console.log(true);
}
console.log(false); // o/p false

let x = true;
let y = false;
console.log(x + 10 - y); // o/p 11

// In JS string + number = string
// In JS string * number = number
// In JS character(string) * number = NAN
// In JS character(string) + number = string
// string '1' + '1' -> string

console.log("1" + 11); // as + operater in JS is used for concatenation
console.log("1" * 11);
console.log("a" * 1);

// typeof Operator in JS -> is a type of Unary Operator
// typeof operator is used to return which type of the datatype is used in the variable assignment.

let a = 10;
console.log(typeof a); // number
a = "John";
console.log(typeof a);
a = {
  firstName: "John",
  lastName: "Doe",
};
console.log(typeof a);
a = true;
console.log(typeof a);
a = undefined;
console.log(typeof a);
a = null;
console.log(typeof a);

// Arithmetic Operators
// Assignment Operators
// Comparison operators
// Unary Operators
// Logical Operators
