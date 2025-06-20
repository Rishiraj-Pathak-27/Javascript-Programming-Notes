// Functions in Javascript

// printing a hello msg using function
// function printHello(n) {
//   console.log("Hello World form Javascript.");
// }
// for (n = 0; n < 10; n++) {
//   printHello(n);
// }

// ading two numbers using function by passing arguments

// function add(a, b) {
//   console.log(`Addition of two numbers ${a} & ${b} = ${a + b}`);
// }
// add(5, 10); // parameters passing

// function multiply(a, b) {
//   console.log(`Multiplication of two numbers ${a} & ${b} = ${a * b}`);
// }
// multiply(5, 5);

// adding unlimited numbers using a function.

// function addUnlimited(a, b) {
//   let ans = 0;
//   for(let i = 0; i < arguments.length; i++){
//    ans = ans + arguments[i];
//   }
//   return ans;
// }
// let res = addUnlimited(100,100,100,100,100);
// console.log(res);

//////////////////////////////////////////////////////

// Arrow function in Javascript

/* syntax -> const function_name = (argument1, argument2, ......) => {
       actual code
 };
function_name();   // calling functions */

// const sayHello = () => {
//   console.log("Hello World!");
// };
// sayHello();

// const add = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(add(5, 10));

// OR

// const addTwo = (num1, num2) => num1 + num2; // this will automatically return num1 + num2
// console.log(add(5, 5));

// const addThree = (...num) => {
//   let ans = 0;
//   for (let i = 0; i < num.length; i++) {
//     ans = ans + num[i];
//   }
//   return ans;
// };
// console.log(addThree(50, 50, 50, 50, 50, 50));

// this keyword
// this keyword used in an object can be used to access all the properties of it in a function.
// const obj = {
//   car : "mustang",
//   engine : "5L V8",
//   carMilage: function(dt,fc){
//         console.log(`${this.car} has a mileage of ${dt/fc} kmpl`);
//   }
// }
// obj.carMilage(10,1);

// OR

// using arrow functions

// const obj = {
//   carName: "Mustang",
//   engine: "5L V8",
//   carMileage: function (dt, fc) {
//     console.log(
//       `Mileage of an american muscled car "${this.carName}" has a mileage of "${
//         dt / fc
//       }" kmpl as it has a "${this.engine}" engine."`
//     );
//   },
// };
// obj.carMileage(10, 2);

////////////////////////////////////////////

// Practice Questions

// Write a function that takes two numbers and returns their sum.

// function addition(a, b) {
//   return a + b;
// }
// console.log(`Addition of two numbers = ${add(5, 10)}`);

// Convert this into an arrow function :
// function greet(name) {
//   return "Hello, " + name + "!";
// }

// const greet = (name) => {
//   return "Hello, " + name + "!";
// };
// console.log(greet("John Doe"));

// Create a function that checks if a number is even or odd.

// function evenOdd(num) {
//   if (num % 2 == 0) {
//     console.log("Even number");
//   } else {
//     console.log("Odd number");
//   }
// }
// evenOdd(4);

// Write an arrow function that returns the square of a number.

// const square = (num) => {
//   return num ** 2;
// }
// console.log(`Square =  ${square(5)}`);

// Write a function expression that returns the factorial of a number.

// function fact(num) {
//   let factorial = 1
//   if (num === 0 || num ===  1) {
//     return 1;
//   } else {
//      return num * fact(num - 1);
//   }
// }
// console.log(fact(5));

// Write a function that says hello. If no name is given, it should default to "Guest".

// function sayHello(name = "Guest"){
//   return `Hello ${name}!`;
// }

// console.log(sayHello());
// console.log(sayHello("John Doe"));

// // Convert this function declaration to a function expression:
// function add(a, b) {
//   return a + b;
// }

// // function expression
// const add = (a,b) => {
//    return a + b;
// };
// console.log(`Addition of two numbers = ${add(5,10)}`);

// Write a function `calculate` that takes two numbers and a callback (add, subtract, etc.)
// Example: calculate(5, 3, subtract) → 2

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// const calculate = (a, b, operation) => {
//   return operation(a, b);
// };

// console.log(`Addition = ${calculate(5, 5, add)}`);
// console.log(`Subtraction = ${calculate(5, 5, subtract)}`);
// console.log(`Multiplication = ${calculate(5, 5, multiply)}`);
// console.log(`Division = ${calculate(5, 5, divide)}`);

// Create a function `multiplier` that returns a function.
// multiplier(3)(5) should return 15

// function multiply(a, b) {
//   return a * b;
// }

// const multiplier = (a, b, operation) => {
//   return operation(a, b);
// };

// console.log(`Multiplication = ${multiplier(3, 5, multiply)}`);

// Write a function max(a, b) that returns the larger number.

// function max(a,b){
//   if(a > b){
//     console.log("a is greater");
//   }
//   else{
//     console.log("b is greater");
//   }
// }
// max(8,5)

// Write a function calculator(a, b, op) where op is one of "+", "-", "*", "/".

// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// function mul(a, b) {
//   return a * b;
// }

// function div(a, b) {
//   return a / b;
// }

// const calculator = (a, b, operation) => {
//   return operation(a, b);
// };

// console.log(`Addition = ${calculator(10, 5, add)}`);
// console.log(`Subtraction = ${calculator(10, 5, sub)}`);
// console.log(`Multiplication = ${calculator(10, 5, mul)}`);
// console.log(`Division = ${calculator(10, 5, div)}`);

// Convert this to a function expression:
/* function sayHi() {
  console.log("Hi!");
} */

// const sayHi = () => {
//   console.log("Hi!");
// };
// sayHi();

//////////////////////////////////////////

// High Order and Callback functions.
// Hight order function takes the another function as a parameter/agrument inside the another function.
// Callbacks are the functions which are used to use the parameter as a function.

//Eg.
// function add(a, b, cb) {
//   let result = a + b;
//   cb(result);
// }

// add(4, 5, function (val) {
//   console.log(val);
// });

///////////////////////////////////////////

// Practice Questions

/*  function greet(name, callback) {
   //Call the callback with a greeting message
}
greet("Rishi", function(message) {
  console.log(message);
}); */

// function greet(name, callback){
//   let result = `Hello ${name}!`;
//   callback(result);
// }

// greet("Rishi", function (message) {
//   console.log(message);
// })


/* function calculate(a, b, operation) {
  // Call the passed operation callback with a and b
}
function add(x, y) {
  return x + y;
}
console.log(calculate(5, 3, add)); // should return 8 */

// function calculate(a,b,operation){
//   return operation(a,b);
// }

// function add(x, y) {
//   return x + y;
// }

// function sub(a, b) {
//   return a - b;
// }

// function mul(a, b) {
//   return a * b;
// }

// function div(a, b) {
//   return a / b;
// }

// console.log(`Addition = ${calculate(10, 5, add)}`);
// console.log(`Subtraction = ${calculate(10, 5, sub)}`);
// console.log(`Multiplication = ${calculate(10, 5, mul)}`);
// console.log(`Division = ${calculate(10, 5, div)}`);







