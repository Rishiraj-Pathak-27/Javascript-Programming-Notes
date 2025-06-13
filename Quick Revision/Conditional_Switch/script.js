// Conditional Statements
// if-else
// User is eligible to vote or not
const age = 19;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// ternary operator
// syntax -> condition ? true_statement : false_statement
const votingAge = 35;
let res = votingAge >= 18 ? "Eligible to vote" : "Not Eligible to vote";
console.log(res);

// Switch Statement
const languages = 2;

switch (languages) {
  case 1:
    {
      console.log("English");
    }
    break;
  case 2:
    {
      console.log("Hindi");
    }
    break;
  case 3:
    {
      console.log("Marathi");
    }
    break;
  default: {
    console.log("Invalid Language");
  }
}

// Practice Questions

// Write a program that takes a number and prints whether it is even or odd.

// let num = parseInt(prompt("Enter a number: "))

// if(num % 2 == 0){
//   console.log("Even no")
// }
// else{
//   console.log("Odd no")
// }

// Take a number input and print whether it's positive, negative, or zero.

// let num = parseInt(prompt("Enter a number: "))

// if(num < 0){
//   console.log("Negative number")
// }
// else if(num > 0){
//   console.log("Positive number")
// }
// else{
//   console.log("Zero")
// }

// Take two numbers and print which one is greater (or if they are equal).

// let num1 = parseInt(prompt("Enter 1st number: "))
// let num2 = parseInt(prompt("Enter 2nd number: "))

// if(num1 > num2){
//   console.log(`${num1} is greater than ${num2}`)
// }
// else if(num2 > num1){
//   console.log(`${num2} is greater than ${num1}`)
// }
// else{
//   console.log(`Both ${num1} & ${num2} are equal`)
// }

// Take marks (0–100) and print:

// A if marks ≥ 90

// B if 80 ≤ marks < 90

// C if 70 ≤ marks < 80

// D if 60 ≤ marks < 70

// F if marks < 60



//Print numbers from 1 to 100 using a loop.

// for(let i = 1; i <= 100; i++){
//     console.log(i)
// }

// Print the multiplication table of a number (e.g., input = 5 → 5, 10, ..., 50).

// let num = parseInt(prompt("Enter a number: "))

// console.log(`Multiplication table of ${num}: `)

// for(let i = 1; i <= 10; i++){
//     console.log(`${num} * ${i} = ${num * i}`)
// }

// Calculate the sum of all even numbers between 1 and 50.

// let sum = 0;
// console.log("The Sum of even no.s between 1 to 50: ")
// for(let i = 1; i <= 50; i++){
//     if(i % 2 == 0){
//         console.log(i)
//         sum = sum + i
//     }

// }

// console.log("The Sum of even numbers between 1 to 50 is:", sum);

// Print the factorial of a number using a loop.

// let num = parseInt(prompt("Enter a number: "));
// factorial = 1;

// for(let i = 1; i <= num; i++){
//     factorial = factorial * i;
// }

// console.log(`Factorial of ${num} = ${factorial}`)




