// Chapter 3

// Loops & Strings
// For Loop

// Syntax: for(initialization; stopping condition; updation (either increment or decrement) ){ statements }

// Print 1 - 5 using for loop

// for (let i = 1; i <= 5; i++){
//     console.log("i = ", i);
// }

// // console.log(i);  --> error
// console.log("Loop ends here.");

// Calculate sum of 1 to n
// let sum = 0;
// let n = 10;
// for (let i=1; i<=n ;i++){

//       sum = sum + i; // sum = 55

// }
// console.log("Sum = ", sum);
// console.log("loop has ended");


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
// let i = 1;
// do{
//     sum = sum + i;
//     i++;
// }
// while(i <= 5);
// console.log("Sum = ", sum);


// Practice Questions


// Print all the even numbers from 0 to 100.

// for(let i = 1; i <= 100; i++){
//     if(i%2 == 0){
//         console.log("Even Numbers = ", i);
//     }
// }

// Guessing Game for User

// let gameno = 25;

// let guessno = prompt("Guess the Game Number: ");

// while(guessno != gameno){
//     guessno = prompt("You Entered the Wrong Number, Guess it Again: ");

// }
// console.log("Congratulations! You have guessed the correct number.");



// let game_number = 45;
// let guessed_number = prompt("Enter the Guessed Number: ");

// while(guessed_number != game_number){
//     guessed_number = prompt("You Entered the Wrong Number, Guess it Again: ");
// }
// console.log("Congratulations! You have guessed the correct number.");

////////////////////////


// STRINGS

// let str = "Rishiraj Pathak";
// console.log(str[0]); //R

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
//6. replace() --> It will replac the given string with the another string.

// let full_name = 'Rishiraj Umesh Pathak';
// console.log(full_name.toUpperCase());

// let full_name2 = 'RISHIRAJ UMESH PATHAK';
// console.log(full_name2.toLowerCase()); 

// let str = "     Rishiraj Pathak";  // Removes the extra spaces from the string.
// console.log(str.trim());

// let str = "Rishiraj Pathak";
// console.log(str.slice(2,4)); // sh -> (2,4-1) i.e 2 to 3
// console.log(str.slice(9)); 

// let str1 = "Rishiraj";
// let str2 = "Pathak";

// let res = str1.concat(str2);
// console.log(res);

// let str = "Rishiraj Pathak";
// console.log(str.replace("raj","jar"));

// let str = "Rishiraj Pathak";
// console.log(str.charAt(10));

// Practice Questions

// User Name Generator Program using Javascript

// let str1  = prompt("Enter your First Name: ");
// let str2 = prompt("Enter your Last Name: ");

// let res = str1.concat(str2);
// console.log("Congratulations! Your Username has been generated.");
// console.log(`\n Your Username is: @${res.toLowerCase()}${res.length}`);


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