// Practice Questions

// Beginner Level

// Write a program that checks if a number is positive, negative, or zero.

// let num = 5;

// if (num < 0) {
//   console.log("Number is negative.");
// } else if (num > 0) {
//   console.log("Number is positive");
// } else {
//   console.log("Number is Zero");
// }

// Take a number (1 to 7) as input and print the day of the week using switch.

// let day = 7;

// switch (day) {
//   case 1:
//     {
//       console.log("Monday");
//     }
//     break;

//   case 2:
//     {
//       console.log("Tuesday");
//     }
//     break;

//   case 3:
//     {
//       console.log("Wednesday");
//     }
//     break;

//   case 4:
//     {
//       console.log("Thursday");
//     }
//     break;

//   case 5:
//     {
//       console.log("Friday");
//     }
//     break;

//   case 6:
//     {
//       console.log("Saturday");
//     }
//     break;

//   case 7:
//     {
//       console.log("Sunday");
//     }
//     break;

//   default: {
//     console.log("Invalid Day number.");
//   }
// }

// Print the multiplication table of a given number up to 10.

// let numTwo = 6;

// console.log(`Multiplication table of ${numTwo} :`);
// for (let i = 1; i <= 10; i++) {
//   console.log(`${numTwo} x ${i} = ${numTwo * i}`);
// }

// Create an array of 5 numbers and print the sum using a for loop.

// const arr = [2,3,4,5,6];
// let res = 0;

// for(let i = 0; i < arr.length; i++){
//     res = res + arr[i];
// }
// console.log(`Sum of all numbers in an array comes out to be "${res}"`);

// OR

// const arr = [2,3,4,5,6];
// let res = 0;

// for(let i in arr){
//     res = res + arr[i];
// }
// console.log(res);

// OR

// const arr = [2, 3, 4, 5, 6];
// let res = 0;

// arr.forEach((val) => {
//   res += val;
// });
// console.log(res);

// Write a function isEven(num) that returns true if the number is even.

// function isEven(num){
//     if(num % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(10));

// Intermediate Level

// Print all numbers between 1 and 50 that are divisible by both 3 and 5.

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(`Number ${i} is divisible by both 3 & 5`);
//   }
// }

// Write a function calculate(num1, num2, operator) that uses switch to perform + - * / % operations.

// function calculate(num1, num2, operator) {
//   let result;
//   switch (operator) {
//     case "+":
//       {
//         result = num1 + num2;
//       }
//       break;

//     case "-":
//       {
//         result = num1 - num2;
//       }
//       break;
//     case "*":
//       {
//         result = num1 * num2;
//       }
//       break;

//     case "/":
//       {
//         result = num1 / num2;
//       }
//       break;

//     case "%":
//       {
//         result = num1 % num2;
//       }
//       break;

//     default: {
//       result = "Invalid!";
//     }
//   }
//   return result;
// }

// console.log(`Addition = ${calculate(10, 5, "+")}`);
// console.log(`Subtraction = ${calculate(10, 5, "-")}`);
// console.log(`Multiplication = ${calculate(10, 5, "*")}`);
// console.log(`Division = ${calculate(10, 5, "/")}`);
// console.log(`Modulus = ${calculate(10, 5, "%")}`);

// Count how many numbers in an array are greater than 50.

// const arr = [50, 20, 70, 60, 90, 100];

// for (let i in arr) {
//   if (arr[i] > 50) {
//     console.log(`Number ${arr[i]} is greater then 50`);
//   }
// }

// Use .filter() to get all the even numbers from an array.

// const arr = [4,5,6,7,8,9,10];

// let res = arr.filter((val) => {
//     if(val % 2 == 0){
//         return val;
//     }
// })
// console.log(res);

// Create a function operate(a, b, fn) and pass different functions like add, subtract, etc., as the callback.

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

// function operate(a, b, fn) {
//   return fn(a, b);
// }

// console.log(`Addition = ${operate(10, 5, add)}`);
// console.log(`Subtraction = ${operate(10, 5, sub)}`);
// console.log(`Multiplication = ${operate(10, 5, mul)}`);
// console.log(`Division = ${operate(10, 5, div)}`);

// Advanced Level

// Write a program to check if a number is prime using a loop and conditionals.

// function isPrime(num) {
//   if (num <= 1) {
//     console.log(`${num} Not a prime number`);
//   } else {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         console.log(`${num} Not a prime number`);
//         return;
//       }
//     }
//   }
//   console.log(`${num} is a Prime number`);
// }

// isPrime(5);

// Print a right-angled triangle of stars using nested loops:
// *
// **
// ***
// ****

// for (let i = 1; i <= 4; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line = line + "*";
//   }
//   console.log(line);
// }

