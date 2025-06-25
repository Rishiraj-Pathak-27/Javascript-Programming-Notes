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

// Create a student object with properties: name, age, grade, and isPassed. Print each property using dot notation.

// const studentDetails = {
//     name : "John Doe",
//     age : 19,
//     grade : "A",
//     isPassed : true,
// };
// console.log(`Name of student = ${studentDetails.name}`);
// console.log(`Age of student = ${studentDetails.age}`);
// console.log(`Grade of student = ${studentDetails.grade}`);
// console.log(`Student Passed = ${studentDetails.isPassed}`);

// Loop through a person object using for...in and log each key and value.

// const person = {
//     name : "John Doe",
//     age : 19,
//     gender : "Male",
//     isMarried : false,
//     occupation : "Software Engineer",
//     company : "Amazon Inc.",
// };

// for(let details in person){
//     console.log(`${details} : ${person[details]}`);
// }

// Add a new property 'city' to an existing object using both dot and bracket notation.

// const person = {
//   name: "John Doe",
//   age: 19,
//   gender: "Male",
//   isMarried: false,
//   occupation: "Software Engineer",
//   company: "Amazon Inc.",
// };

// console.log("Before adding new property:");
// for (let details in person) {
//   console.log(`${details} = ${person[details]}`);
// }

// console.log("After adding new property:");
// person.city = 'Pune';

// for (let details in person) {
//   console.log(`${details} = ${person[details]}`);
// }

// OR

// person['city'] = 'Pune';
// for (let details in person) {
//   console.log(`${details} = ${person[details]}`);
// }

// Write a function greet(name) that prints "Hello, <name>!".

// function greet(name){
//     console.log(`Hello, ${name}!`);
// }
// greet("John Doe");

// Create a function to find the square of a number.

// function square(n) {
//   return n ** 2;
// }
// console.log(`Square is "${square(5)}"`);

// Write a function that returns the sum of all numbers from 1 to n using a for loop.

// function sumUpto(n){
//     let sum = 0;
//     for(let i = 0; i <= n; i++){
//         sum = sum + i;
//     }
//     console.log(sum);
// }
// sumUpto(6);

// Use a for loop to print numbers from 10 to 1.

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

// Use a while loop to print even numbers from 2 to 10.

// let i = 2;
// while (i <= 10) {
//   if (i % 2 == 0) {
//     console.log(`Even no ${i}`);
//   }
//   i++;
// }

// Use a do...while loop to print numbers from 1 to 5.

// let i = 1;
// do{
//     console.log(i);
//     i++;
// }
// while(i <= 5);

// Declare an array of 5 fruits. Print each fruit using a for loop.

// const fruits = ['mango', 'kiwi', 'apple', 'grapes', 'banana'];
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// Add and remove elements from an array using push, pop, shift, and unshift.

// const fruits = ["mango", "kiwi", "apple", "grapes", "banana"];

// fruits.push('cherry');
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// fruits.unshift('mango','watermelon');
// console.log(fruits);

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

// Create an array of objects representing students with name and marks, and print names of students who scored above 80.
// using for in loop

//const studentArr = [
//   { name: "john", marks: 96 },
//   { name: "jane", marks: 85 },
//   { name: "bill", marks: 75 },
//   { name: "alexa", marks: 60 },
// ];

// for (let result in studentArr) {
// //   console.log(`Name = ${studentArr[result].name} , Marks Scored = ${studentArr[result].marks}`);
//   if(studentArr[result].marks > 80){
//     console.log(`Students scored above 80 marks = ${studentArr[result].name}`)
//   }
// }

// OR
// using for of loop

// const studentArr = [
//     { name: "john", marks: 96 },
//     { name: "jane", marks: 85 },
//     { name: "bill", marks: 75 },
//     { name: "alexa", marks: 60 },
//   ];

//   let count = 0;
// for(let student of studentArr){
//     if(student.marks > 80){
//         console.log(`Student who scored above 80 marks = ${student.name}`);
//         count ++;
//     }
// }
// console.log(`Total number of students who scored above 80 makrs = ${count}`);

// OR
// using .filter() method

// const studentArr = [
//   { name: "john", marks: 96 },
//   { name: "jane", marks: 85 },
//   { name: "bill", marks: 75 },
//   { name: "alexa", marks: 60 },
// ];

// let count = 0;
// studentArr.filter((val) => {
//     if(val.marks > 80){
//         console.log(`Students who scored above 80 = ${val.name}`);
//         count++;
//     }
// })
// console.log(`Total number of students who scored above 80 makrs = ${count}`);

// Create a method inside an object that returns the full name of a user using this.

// const userName = {
//     name : 'John Doe',
//     fullName : function() {
//         console.log(`Full Name of user = ${this.name}`);
//     }
// }
// userName.fullName();




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
