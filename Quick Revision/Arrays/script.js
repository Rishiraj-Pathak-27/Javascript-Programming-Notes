// Arrays in JS
// arrays are used to store multiple values in a single variable.
// arrays in JS can be used to store the HETEROGENEOUS values.

// Eg.
// const marvels = ["Thor", "Iron man", "Captain America", "Hulk", "Black Panther", "Spider man"];
// console.log(marvels);

// length of the array
// console.log(marvels.length);   // 6

// accessing values from the array
// console.log(marvels[0]);
// console.log(marvels[5]);
// console.log(marvels[3]);

// updating values in the array
// marvels[2] = "Spider man";
// console.log(marvels);

// to print all the array values one after the another
// for(i in marvels){
//     console.log(marvels[i])
// }

// OR

// for(let i = 0; i < marvels.length; i++){
//     console.log(marvels[i]);
// }

// built - in methods in array

// push()
// pop()
// indexOf()
// reverse()

// const marvels = [
//   "Thor",
//   "Iron man",
//   "Captain America",
//   "Hulk",
//   "Black Panther",
//   "Spider man",
// ];

// marvels.push("Loki");
// marvels.push({ name: "John Doe" });
// console.log(marvels);
// console.log(marvels.pop());
// console.log(marvels);
// console.log(marvels.indexOf("Hulk"));
// console.log(marvels.reverse());

/////////////////////////////////////////////////////////

// High order function in array

// 1. forEach() function -> use to iterate over every value, index or array of array and print them one by one.

//Eg.

// const subjects = [
//   "Machine Learning",
//   "Operating System",
//   "VLSI",
//   "Embedded Systems",
// ];

// function sub(val){
//     console.log(val);
// }
// subjects.forEach(sub);

// OR

// subjects.forEach((val, idx, array) => {
//   console.log(`${idx} - ${val} - ${array}`);
// });

//////////////////////////////////////////////////////////

// Practice Questions

// Double each number in the array and print.

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((val) => {
//     console.log(`${val * 2}`);
// });

// Print the index along with each element.

// let colors = ["red", "green", "blue"];

// colors.forEach((val, idx) => {
//   console.log(`${idx}: ${val}`);
// });

/* Create a new array with squares of each number
You can't use forEach directly to return a new array (like map), but you can push manually. */

// let nums = [1, 2, 3, 4];
// let square = [];

// nums.forEach((val) => {
//     square.push(val ** 2);
// });

// console.log(square);

// Count how many even numbers are in the array

// let values = [1, 4, 6, 7, 9, 10, 12];

// values.forEach((val) => {
//   if (val % 2 == 0) {
//     console.log(`${val} is an Even number`);
//   }
// });

// Concatenate all strings into a single sentence.

// let words = ["JavaScript", "is", "fun"];
// let sentence = "";

// words.forEach((val, idx) => {
//   if (idx === 0) {
//     sentence = sentence + val;
//   } else {
//     sentence = sentence + " " + val;
//   }
// });
// console.log(sentence);





