// Chapter 2 (Operators & Conditional Statements.)

//single line comment
//console.log("Hello World!");
// this is a commented part.

//multi line comment
/*console.log("Hello World!");
 this is a commented part.*/

// OPERATORS

//1. Arithmatic Operators

//  let a = 30;
//  let b = 10;
//  console.log("a = ",a, "&" ,"b = ",b);
//  console.log("a + b = ",a + b);
//  console.log("a - b = ",a - b);
//  console.log("a * b = ",a * b);
//  console.log("a / b = ",a / b);
//  console.log("a % b = ",a % b);
//  console.log("a ** b = ",a ** b);

//  // Unary Operator
// let c = 10;
// console.log("c = ", c);
// c++;    // post-increment
// console.log("c = ", c);
// ++c;   // pre-increment
// console.log("c = ", c);
// c--;  // post-decrement
// console.log("c = ", c);
// --c;  // pre-decrement
// console.log("c = ", c);
// +c;  // converts string to a number
// console.log("c = ", c);
// -c;  // converts string to a number & negate it
// console.log("c = ", c);


//2. Assignment Operators.

// let a = 8;
// let b = 6;

// console.log("a = ",a ,"&", "b = ",b);
// a += 10;// a = a + 10.
// console.log('a = ',a);
// b += 10;// b = b + 10.
// console.log("b = ",b);

// a -= 2;//a = a - 2.
// console.log("a = ", a);
// b -= 2;//b = b - 2.
// console.log("b = ", b);

// a *= 2;//a = a * 2.
// console.log("a = ", a);
// b *= 2;//b = b * 2.
// console.log("b = ", b);

// a /= 2;//a = a / 2.
// console.log("a = ", a);
// b /= 2;//b = b / 2.
// console.log("b = ", b);

//3. Comparison Operator.

// let a = 10;
// let b = 30;
// let c = "10";

// console.log("a = ",a ,"&", "b = ",b);
// console.log("a == b: ", a == b);
// console.log("a >= b: ", a >= b);
// console.log("a <= b: ", a <= b);
// console.log("a != b: ", a != b);
// console.log("a === c: ", a === c); // checks strictly wheather the a is equal to b.

//4. Logical Operator.

// let a = 50;
// let b = 30;

// console.log("a = ",a ,"&", "b = ",b);
// let cond1 = a > b;
// let cond2 = a < b;
// console.log("cond1 && cond2: ", cond1 && cond2);

// console.log("cond1 || cond2: ", cond1 || cond2);

// console.log("!(a<b) = ", !(a === b));

// Conditional Statements

// 1. IF Statement
// examples

// let age = 16;

// if(age >= 18){
//     console.log("Eligible for Lisence.");
//     console.log("You can Vote.");
// }

// if(age < 18){
// console.log("You Cannot Vote.");
// }

//dark and light mode
// let mode = "dark";
// let color;

// if(mode === "light"){
//     color = "white";
// }

// if(mode === "dark"){
//     color = "black";
// }
// console.log(color);

//greater form 3 no.s
// let a = 900;
// let b = 40;
// let c = 90;

// if(a>b && a>c){
//     console.log("a is greater");
// }
// if(b>a && b>c){
//     console.log("b is greater");
// }
// if(c>a && c>b){
//     console.log("c is greater");
// }

// 2. IF-ELSE Statement

//examples

// light & dark mode

// let mode = "dark";
// let color;

// if(mode === "dark"){
//     color = "black";
// }
// else{
//     color = "white";
// }
// console.log(color);

// eligible for vote

// let age = 25;
// if(age >= 18){
//     console.log("You are eligible to vote");
// }
// else{
//     console.log("You are under 18");
// }

// odd - even

// let a = 40;

// if(a % 2 == 0){
//     console.log(a, "Even Number.");
// }
// else{
//     console.log(a, "Odd Number.")
// }

// 3. ELSE-IF Statement.

// greater from 4 numbers.

// let a = 20;
// let b = 50;
// let c = 89;
// let d = 38;

// if(a>b && a>c && a>d){
//     console.log(a, "is greater.");
// }
// else if(b>a && b>c && b>d){
//     console.log(b, "is greater.");
// }
// else if(c>a && c>b && c>d){
//     console.log(c, "is greater");
// }
// else{
//     console.log(d, "is greater");
// }

// age

// let age = 19;

// if(age >= 60){
//     console.log("You are Senior Citizen.");
// }
// else if(age >= 18){
//     console.log("you are adult.");
// }
// else if(age < 18){
//     console.log("You are Junior.");
// }
// else{
//     console.log("Dead Person.");
// }

// various color modes

// let mode = "purple";
// let color;

// if(mode === "dark"){
//     color = "black";
// }
// else if(mode === "purple"){
//     color = "purple";
// }
// else if(mode === "green"){
//     color = "green";
// }
// else if(mode === "light"){
//     color = "white";
// }
// else{
//     color = "blue";
// }
// console.log(color);

// 4. Ternary Operators

// syntax --> condition ? "true output" : "false output";

//examples

// modes

// let mode = "dark";
// let color;
// mode === "dark" ? color = "black" : color = "white";
// console.log(color);

// age factor

// let age = 36;
// let res = age >= 18 ? "adult" : "junior";
// console.log(res);

// Practice Questions.

/* Get user input by using prompt("Enter a number: "). Check if the number is 
a multiple of 5 or not */

// let a = prompt("Enter any number: ");
// if(a % 5 == 0){
//     console.log(a, "is a multiple of 5.");
// }
// else{
//   console.log(a, "is not a multiple of 5");
// }

/* Write a code which can give grade to students according to their scores:
1. 80-100 -> A,
2. 70-89 -> B,
3. 60-69 -> C,
4. 50-59 -> D,
5. 0-49 -> F. */

// let percentage = prompt("Enter the Percentage: ");
// let grade;
// if(percentage >= 80 && percentage <=100){
//      grade = "A";
// }
// else if(percentage >= 70 && percentage <= 89){
//     grade = "B";
// }
// else if(percentage >= 60 && percentage <= 69){
//     grade = "C";
// }
// else if(percentage >=50 && percentage <= 59){
//     grade = "D";
// }
// else{
//     grade = "F";
// }

// console.log("You have got", grade, "grade according to your percentage.");

/////////////////////////////////////////////////////////////////////////////
