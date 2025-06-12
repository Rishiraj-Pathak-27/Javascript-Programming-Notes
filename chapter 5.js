// Functions & Methods

// Functions helps us to remove the redundancy/repetition.
// Syntax

// function function_name(){
//     statements...
// }

// simple program

// function myFunction() {
//     console.log("My Name is Rishiraj Pathak :)");
//     console.log("I am pursuing my Engineering Degree.");
// }
// myFunction();

// function first(msg){  // Parameter
//     console.log(msg);
// }
// first("Hello :)");  // argument

// addition of 2 no.s
// function add(a,b){
//     let result = a + b;
//     console.log(`The addition of ${a} & ${b} = ${result}`);
//  }

// add(150,500);

//OR

// function sum(a,b){   // Function parameters are like local variables which lies between the block scope
// Local Variables = are those variables which lies in that function only.
//   s = a + b;
//   return s;
// }

// let val = sum(3,6);
// console.log(val);

// ARROW FUNCTION --> Modern JS

/* Syntax  = const function_name = (para1, para2....) => {
    statements.....
}*/

// Examples

// const sum = (a,b) => {
//     return a + b;
// }

// let res = sum(3,5);
// console.log(res);

// const mul = (a,b) => {
//     let result = a * b;
//     console.log(`The Product of ${a} & ${b} = ${result}`);

// }

// let a = prompt("Enter the 1st Number: ");
// let b = prompt("Enter the 2nd Number: ");
// mul(a,b);

// OR

// const mul = (a,b) => {
//     return a * b;
// }

// let val = mul(3,4);
// console.log(val);

// PRACTICE QUESTIONS

// function vowelCount(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// vowelCount("JavaScript");

// const vowelsCount = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// vowelsCount("Javasctipt");

/////////////////////////////////////////////////////////////

// Methods

// forEach Loop in Arrays

// Syntax --> name_of_array.forEach(callBackFunction) - a callbackFunction is a funtion which is passed as an arguement to another function.

//  forEach() Function

/* let train = ["Wheat", "Rice", "Sand", "Coal", "Steel"];
train.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
}); */

/* For a given array of numbers, print the square of each value using forEach Loop */

/* let numbers = [1,2,3,4,5];
numbers.forEach((sqr) =>{
    console.log(sqr ** 2);
}); */

//OR

/* let numbers = [1,2,3,4,5];
let calSquare = (sqr) => {
    console.log(sqr ** 2);
};

numbers.forEach(calSquare); */

/* let arr = ["cricket", "football", "volleyball", "badminton", "tennis"];
arr.forEach((val, idx, array) =>{
    console.log(val, idx, array);
}); */

// let army_names = ["Navy", "Air Force", "BSF", "CRPF"];
// army_names.forEach((val, idx) =>{
//     console.log(val, idx);
// })

let num = [23, 43, 25, 67, 54];

let newArray = num.map((val) => {
  return val * 2;
});

console.log(newArray);