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

const sayHello = () => {
  console.log("Hello World!");
};
sayHello();

const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(5,10));

// OR

const addTwo = (num1, num2) => num1 + num2;    // this will automatically return num1 + num2
console.log(add(5,5));
