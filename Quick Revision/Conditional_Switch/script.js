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

// Check if a number is divisible by 5 and 11.

// let num =55;

// if(num % 5 == 0 && num % 11 == 0){
//   console.log(`${num} is completely divisible 5 & 11`)
// }
// else{
//   console.log(`${num} is not completely divisible 5 & 11`)
// }

// Check whether a character is a vowel or consonant.

// let char = "b";

// if (
//   char === "a" ||
//   char === "e" ||
//   char === "i" ||
//   char === "o" ||
//   char === "u"
// ) {
//   console.log(`Character ${char} is a vowel`);
// } else {
//   console.log(`Character ${char} is a consonent`);
// }

// Check if a year is a leap year or not.

// let year = parseInt(prompt("Enter year: "))

// if(year % 4 == 0){
//   console.log(`Year ${year} is a leap year`)
// }
// else{
//   console.log(`Year ${year} is not a leap year`)
// }

// Check if a character is uppercase or lowercase.

// let char = prompt("Enter Character: ")

// if(char >= "A" && char <= "Z"){
//   console.log(`Character ${char} is in Upper case`)
// }
// else{
//   console.log(`Character ${char} is in Lower case`)
// }

//Print numbers from 1 to 100 using a loop.

// for(let i = 1; i <= 100; i++){
//     console.log(i)
// }

// Find the largest among three numbers.

// let a = 30;
// let b = 10;
// let c = 50;

// if(a > b && a > c){
//   console.log(`${a} is greater than ${b} & ${c}`)
// }
// else if(b > a && b > c){
//   console.log(`${b} is greater than ${a} & ${c}`)
// }
// else{
//   console.log(`${c} is greater than ${a} & ${b}`)
// }

// Check if a triangle is valid (sum of angles = 180).

// let angle1 = parseFloat(prompt("Enter the value of first angle: "));
// let angle2 = parseFloat(prompt("Enter the value of second angle: "));
// let angle3 = parseFloat(prompt("Enter the value of third angle: "));

// let sum = angle1 + angle2 + angle3;

// if (sum === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
//   console.log("Triangle is valid");
// } else {
//   console.log("Triangle is invalid");
// }

// Assign grade based on marks:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F

// let marks = parseFloat(prompt("Enter your marks: "))

// if(marks >= 90 && marks <= 100){
//   console.log("You got A grade")
// }

// else if(marks >= 80 && marks <= 89){
//   console.log("You got B grade")
// }

// else if(marks >= 70 && marks <= 79){
//   console.log("You got C grade")
// }

// else if(marks >= 60 && marks <= 69){
//   console.log("You got D grade")
// }
// else{
//   console.log("You are fail")
// }

// Check if a person is a child, teenager, adult, or senior (age-based categories).

// let personAge = parseInt(prompt("Enter your age: "))

// if(personAge < 12){
//   console.log("You are child")
// }
// else if(personAge >= 13  && personAge <= 17){
//   console.log("You are teenager")
// }
// else if(personAge >= 18 && personAge <= 60){
//   console.log("You are an adult")
// }
// else{
//   console.log("You are senior")
// }

// Check if a number is a multiple of 3 or 7 or both.

// let num = 84;

// if (num % 3 == 0 && num % 7 == 0){
//   console.log(`${num} is divisible by 3 & 7 both`);
// }
// else if(num % 7 == 0){
//   console.log(`${num} is divisible by 7`)
// }
// else if(num % 3 == 0){
//     console.log(`${num} is divisible by 3`)
// }
// else{
//   console.log(`${num} is not divisible by 3 or 7`)
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

// Use switch to perform calculator operations (add, subtract, multiply, divide)

// let num1 = parseInt(prompt("Enter first number: "));
// let num2 = parseInt(prompt("Enter second number: "));
// let operator = prompt("Enter the operator (+, -, *, /): ")

// switch(operator) {
//     case '+' : {
//       console.log(`Addition of ${num1} & ${num2} is ${num1 + num2}`);
//     }
//     break;

//     case '-' : {
//       console.log(`Subtraction of ${num1} & ${num2} is ${num1 - num2}`);
//     }
//     break;

//     case '*' : {
//       console.log(`Multiplication of ${num1} & ${num2} is ${num1 * num2}`);
//     }
//     break;

//     case '/' : {
//       console.log(`Division of ${num1} & ${num2} is ${num1 / num2}`);
//     }
//     break;

// }

// Convert day number (1–7) to weekday name using switch.

// let dayNumber = parseInt(prompt("Enter the day in number form (1-7): "));

// switch (dayNumber) {
//   case 1:
//     {
//       console.log(`${dayNumber} = Monday`);
//     }
//     break;
//   case 2:
//     {
//       console.log(`${dayNumber} = Tuesday`);
//     }
//     break;
//   case 3:
//     {
//       console.log(`${dayNumber} = Wednesday`);
//     }
//     break;
//   case 4:
//     {
//       console.log(`${dayNumber} = Thursday`);
//     }
//     break;
//   case 5:
//     {
//       console.log(`${dayNumber} = Friday`);
//     }
//     break;
//   case 6:
//     {
//       console.log(`${dayNumber} = Saturday`);
//     }
//     break;
//   case 7:
//     {
//       console.log(`${dayNumber} = Sunday`);
//     }
//     break;
// }

// Check if a string starts with a vowel and ends with a consonant.

// let str = prompt("Enter the string: ").toLowerCase();

// if ('aeiou'.includes(str[0]) && 'bcdfghjklmnpqrstvwxyz'.includes(str[str.length - 1])) {
//   console.log(`The string "${str}" starts with a vowel and ends with a consonant.`);
// } else {
//   console.log(`The string "${str}" does not start with a vowel and end with a consonant.`);
// }

// Simple login system (check username and password).

// let username = prompt("Enter Username: ");
// let password = prompt("Enter Password: ");

// if(username === "RishirajPathak" && password === "123456"){
//   alert("Successfull.....")
// }
// else{
//   alert("You have entered Wrong Username or Pass, Try Again!")
// }

// Find number of days in a given month (1-12) using switch.

// let month = prompt("Enter Month: ")

// switch(month) {
//   case 'January':
//   case 'March':
//   case 'May':
//   case 'July':
//   case 'August':
//   case 'October':
//   case 'December': {
//     console.log("This month has 31 days");
//   }
//   break;

//   case 'April':
//   case 'June':
//   case 'September':
//   case 'November': {
//     console.log("This month has 30 days");
//   }
//   break;

//   case 'February':{
//     console.log("This month has 28 days (29 days in every 4 years)");
//   }
//   break;

// }

// Use nested if to check if a number is positive and even or positive and odd or negative.

// let num = parseInt(prompt("Enter number: "));

// if(num > 0 && num % 2 == 0){
//   console.log(`The ${num} is Positive and even.`)
// }
// else if(num < 0){
//   console.log(`The ${num} is negative.`)
// }
// else{
//   console.log(`The ${num} is positive and odd.`)
// }

// Check if a string is empty.

// let str = "John Doe"

// if(str.length === 0){
//   console.log("The String is empty")
// }
// else{
//   console.log(`The string is not empty, string = ${str}`)
// }

// Check if a password is strong (length ≥ 8, has number, uppercase, and symbol).

// let password = (prompt("Enter Password: "));

// if (
//   password.length >= 8 &&
//   /[A-Z]/.test(password) &&
//   /[0-9]/.test(password) &&
//   /[!@#$%^&*(),.?":{}|<>]/.test(password)
// ) {
//   console.log("✅ Strong Password");
// } else {
//   console.log("❌ Weak Password");
// }


