// Chapter 3

// Loops & Strings

// General types of Loops in JS
// For Loop

// Syntax: for(initialization; stopping condition; updation (either increment or decrement) ){ statements }

// Print 1 - 5 using for loop

// for(let i = 1; i <= 5; i++){

//   console.log("John Doe");
// }
// console.log("Loop ended");

// Calculate sum of 1 to n

// let sum = 0;
// let n = 5;

// for(let i = 1; i <=n; i++){
//   sum += i;
// }
// console.log(`Sum of 1 to ${n} = ${sum}`);

// inner execution of the above code.

/* 1. let i = 1, 1 <= 5 <-- True(sum = 0 + 1 = 1)
2. let i = 2, 2 <= 5 <-- True(sum = 1 + 2 = 3)
3. let i = 3, 3 <= 5 <-- True(sum = 3 + 3 = 6)
4. let i = 4, 4 <= 5 <-- True(sum = 6 + 4 = 10)
5. let i = 5, 5 <= 5 <-- True(sum = 10 + 5 = 15)
6. let i = 6, 6 <= 5 <-- False(exit the loop and print the sum which is equal to 15) */

// While Loop

// Syntax: while(condition){ statements }

/* Printing Format: initialization
                   while(condition){
                   statements........
                     updation
                     } */

// Print 1 - 5 using for loop

// let i = 1;
// while(i <= 5){
//     console.log("i = ",i);
//     i++;
// }

// Calculate sum of 1 to n

// let sum = 0;
// let i = 1;
// while(i <= 5){
//     sum = sum + i;
//     i++;
// }
// console.log("Sum = ", sum);

// Do While Loop --> It will execute atleast once

// Syntax: do{ statements } while(condition);

/* Printing Format: initialization
                        do{
                   statements........
                     updation
                     } while(condition) */

// Print 1 - 5 using for loop

// let i = 1;
// do {
//     console.log("i = ",i);
//     i++;
// }
// while(i <= 5);

// Calculate sum of 1 to n

// let sum = 0;
// let n = 5;
// let i = 1;
// do {
//   sum += i;

//   i++;
// } while (i <= 5);
// console.log(`Sum of 1 to ${n} = ${sum}`);

//////////////////////////////////////////////////////////////

// special types of loops in JS

// for...of loop --> used to iterate over some types of datatypes like string, arrays etc. and cannot be iteratable on the objects

// syntax --> for(let variable_name of datatype_name){ block of code }

// Eg.

// let str = "John Doe";
// let count = 0;
// for(let val of str){
//   console.log(val);
//   count++;
// }
// console.log(`Total no of character is string = ${count}`);

// for...in loop --> used to iterate/used with the the datatypes such as objects, arrays etc..

// syntax --> for(let variable_name in datatype_name){ block of code }

// Eg.

// const empDetails = {
//   name: "John Doe",
//   age: 19,
//   isMarried: false,
//   salary: "50,000$",
//   empid: "emp67",
// };

// for (let key in empDetails) {
//   console.log("key =", key, " value = ",empDetails[key]);
// }

// Practice Questions

// Print all the even numbers from 0 to 100.

// for(let i = 1; i <= 100; i++){
//     if(i % 2 == 0){
//         console.log("Even Numbers = ", i);
//     }
// }

// Guessing Game for User

// let originalNumber = 45;
// let guessedNumber = prompt("Guess a number: ");

// while(guessedNumber != originalNumber){
//   guessedNumber = prompt("You lost! try again: ");
// }
// console.log("You won!");

// OR

// let originalNumber = 25;
// let guessedNumber;

// do {
//   guessedNumber = Number(prompt("Guess a number: "));
//   if (isNaN(guessedNumber)) {
//     alert("Kindly enter a number!");
//   } else {
//     if (guessedNumber === originalNumber) {
//       alert("You won!");
//       break;
//     } else {
//       alert('You Lost! try again');
//     }
//   }
// } while (guessedNumber != 0);

//////////////////////////////////////

// STRINGS

// let str = "John Doe";
// console.log(str[0]); //J

// let str2 = "Hello World!";

// Template Literals

/* special type of String which are used to print the string using back ticks
and we can also use the variables inside the string using ${variable_name} */

// let sentence = `This is a Template Literal.`;
// console.log(sentence);

// let obj  = {
//   model : "G-Wagon",
//   company : "Mercedes",
// };

// console.log(`The car ${obj.model} is manufactured from ${obj.company} company`);

// Escape Characters
//1. \n --> New Line
//2. \t --> Tab Space

// console.log("Hello\nWorld!");
// console.log("Hello\tWorld!");

// STRING METHODS

//1. toUpperCase() --> It will convert the string into uppercase.
//2. toLowerCase() --> It will convert the string into lowercase.
//3. trim() --> It will remove the extra spaces from the starting and ending of the string.
//4. slice() --> It will slice the string from the given range.
//5. concat() --> It will concatenate the two strings.
//6. replace() --> It will replace the given string with the another string.
//7. replaceAll().
//8. length() --> return the length of the string.

// let full_name = 'John Doe';
// console.log(full_name.toUpperCase());

// let full_name2 = 'john doe';
// console.log(full_name2.toLowerCase());

// let str = "     John Doe";  // Removes the extra spaces from the string.
// console.log(str.trim());

// let str = "John Doe";
// console.log(str.slice(2,4)); // sh -> (2,4-1) i.e 2 to 3
// console.log(str.slice(9));

// let str1 = "John";
// let str2 = " Doe";

// let res = str1.concat(str2);
// console.log(res);

// let str = "John Doe";
// console.log(str.replace("Doe","Mario"));

// let str = "John DoeDoeDoe";
// console.log(str.replaceAll("Doe", "Mario"));

// let str = "John Doe";
// console.log(str.charAt(5));

// Practice Questions

// User Name Generator Program using Javascript

// let str1 = prompt("Enter your full name: ");
// let partName = str1.trim().split(' ');

// let firstName = partName[0];
// let middlename = partName.slice(1,partName.length - 1);  
// let lastName = partName[partName.length - 1];

// let result = (firstName + middlename + lastName).toLocaleLowerCase();
// console.log(`Username Generated = @${result}${result.length}`);

// OR

let str1 = prompt("Enter the first name: ");
let str2 = prompt("Enter the last name: ");

let result = (str1.concat(str2)).toLocaleLowerCase();
console.log(`Username Generated = @${result}${result.length}`);

// let browser = "Google Chrome";
// browser = (browser.length - 1);
// console.log(browser);

// includes() --> It will check whether the given string is present in the main string or not.

// if (browser.includes("Chrome")){
//   console.log("chrome found successfully!");
// }
// else{
//   console.log("Browser does not found Chrome!");
// }

// startsWith() --> It will check whether the given string starts with the given string or not.

// if(browser.startsWith("Google")){
//   console.log("Browser starts with Google.");
// }
// else{
//   console.log("Browser does not start with Google.");
// }

// endsWith() --> It will check whether the given string ends with the given string or not.

// if(browser.endsWith("Chrome")){
//   console.log("Browser ends with Chrome.");
// }
// else{
//   console.log("Browser does not end with Chrome.");
// }

// indexOf() --> It will return the index of the given string.

// console.log(browser.indexOf("Chrome"));
