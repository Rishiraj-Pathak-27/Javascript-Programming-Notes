// Loops in JS

// for loop -> it is used to execute a statement/block of code until the condition is met.
// we use for loop when we know that how many no. of times we have to execute the task/block of code.

//Eg.
// wrong practice to print name 10 times
// console.log("John Doe");
// console.log("John Doe");
// console.log("John Doe");
// console.log("John Doe");
// console.log("John Doe");
// console.log("John Doe");
// console.log("John Doe");
// console.log("John Doe");
// console.log("John Doe");
// console.log("John Doe");

// correct practice to print name 10 times

// for (let i = 1; i <= 10; i++) {
//   console.log("John Doe");
// }

// while loop -> it is used to execute a statement/block of code until the condition is met.
// we use while loop when we do not know that how many times we have to execute the task/block of code.

// let ip = 0;
// let house = 40;

// while (ip < house) {
//   ip++;
//   console.log("Step Forwarded" + ip);
// }

// Do While loop
// it is executed just as the while loop but it executes the statement/block of code first and then execute the condition

// let ip1 = 0;
// let house1 = 40;
// do {
//   ip1++;
//   console.log("Step Forwarded" + ip1);
// } while (ip1 < house1);

// Guess the input Game

// let number = 60;
// let guessedNumber;

// do {
//   guessedNumber = parseInt(prompt("Guess a number: "));
//   if (guessedNumber === number) {
//     alert("Hurray You won the game!");
//     break;
//   } else {
//     alert("You Lost the game!, Retry");
//   }
// } while (guessedNumber != 0);

/////////////////////////////////////////////////////
// Practice Problems

// Use a for loop to print numbers 1 to 10 in the console.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Use a loop to calculate and print the sum from 1 to 100.

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log(`The sum form 1 to 100 = ${sum}`);

// Print even numbers between 1 and 50.

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// Print the multiplication table from 1 to 10 for 5.

// let number = 5;

// console.log("The multiplication table of 5 is: ");
// for (let i = 1; i <= 10; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }

// Use a while or for loop to print in reverse.

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// OR

// let i = 10;
// while(i > 0){
//   console.log(i)
//   i--;
// }

// Input a number and calculate its factorial using a loop.

// let num = parseInt(prompt("Enter a number: "));   // 5
// let fact = 1;

// if (num < 0) {
//   console.log("The factorial of negative number does not exist");
// }
// else {
//   for(let i = 1; i <= num ; i++){
//     fact = fact * i;   // fact = 1 x 2 = 2 x 3 = 6 x 4 = 24 x 5 = 120
//   }
//   console.log(`Factorial of ${num} = ${fact}`)
// }

// OR

// let num = parseInt(prompt("Enter a number: ")); // 5
// let fact = 1;

// if (num < 0) {
//   console.log("The factorial of negative number does not exist");
// } else {
//   let i = 1;
//   while (i <= num) {
//     fact = fact * i;
//     i++;
//   }
//   console.log(`Factorial of ${num} = ${fact}`);
// }

// Sum of First N Natural Numbers

// let numList = parseInt(prompt("Enter a number: "));
// let sum = 0;
// for (let i = 1; i <= numList; i++) {
//   sum = sum + i;
// }
// console.log(`Addition of natural numbers = ${sum}`);


// Print Even Numbers from 1 to 20

// for(let i = 1; i <= 20; i++){
//     if(i % 2 == 0){
//         console.log(`Even numbers : ${i}`)
//     }
// }

// let food = prompt("Enter your favourite food: ");

// switch(food) {
//     case 'burger' : {
//          alert("Burger is so delicious");
//     }
//     break;
//     case 'momos' : {
//         alert("My Favourite food is Momos");
//     }
//     break;
//     case 'pizza' : {
//             alert("Pizza has a wonderful cheesy taste");
//     }
//    break;
//     default : {
//         alert("Pani-Puri is an Indian traditional starter dish");
//     }
// }


// let str = "12345";
// let reversed = "";

// // here i = 5 - 1 = 4; 4 >= 0 -> true(4--), 3 >= 0 -> true(3--), 2 >= 0 true(2--), 1 >= 0 -> true(1--), 0 >= 0 -> true(0--), -1 >= 0 -> false; 
// for(let i = str.length - 1; i >= 0; i--){
//     reversed = reversed + str[i];
//     // 5[0] , 4[1], 3[2], 2[1], 1[0] = 54321
// }
// console.log(reversed);



