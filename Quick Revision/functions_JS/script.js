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

function evenOdd(num) {
  if (num % 2 == 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
}
evenOdd(4);

// High Order and Callback functions.
// Hight order function takes the another function as a parameter/agrument inside the another function.
// Callbacks are the functions which are used to use the parameter as a function.

//Eg.
function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

add(4, 5, function (val) {
  console.log(val);
});
