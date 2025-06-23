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

// .forEach()
// .map()
// .find()
// .findindex()
// .filter()
// .slice()

// 1. forEach() function -> use to iterate over every value, index or array of array and print them one by one.
// forEach() method do not return a new array, it results undefined.
// syntax => array_name.forEach(function{created/imported});

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
//     sentence += val;
//   } else {
//     sentence = sentence + " " + val;
//   }
// });
// console.log(sentence);

////////////////////////////////////////////////

// .map() function in JS
// .map() method work very similar to the .forEach() method but the .map() method is used to return a new array as an output.

// syntax => array_name.map(function{created/imported});

// .forEach() vs .map()

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function double(num) {
//   return num * 2;
// }

// let newArr = numbers.forEach(double);
// console.log(newArr);

// here if we use the .forEach() methods then it will return the result as undefined, bcoz we cannot create a new array using forEach().

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function double(num) {
//   return num * 2;
// }

// let newArr = numbers.map(double);
// console.log(newArr);

// Even & Odd numbers using .forEach()
// const n = [2,3,4,5,6];

// function evenOdd(n) {
//   if (n % 2 == 0) {
//     return "Even no = ",n;
//   } else {
//     return "Odd no = ", n;
//   }
// }

// let newArr = n.forEach(evenOdd);
// console.log(newArr);
// this will result as undefined as .forEach() method do not return a new array
// to overcome this we will use .map()

// Even & Odd numbers using .map()

// const n = [2, 3, 4, 5, 6];

// function evenOdd(n) {
//   if (n % 2 == 0) {
//     return "Even no = ", n;
//   } else {
//     return "Odd no = ", n;
//   }
// }

// let newArr = n.map(evenOdd);
// console.log(newArr);

/////////////////////////////////////

// .find() -> .find() method is used to return the boolean value as a result based on the given condition in the callback function.

// const numbers = [2, 3, 56, 3, 6];

// function findNumber(n){
//  if(n === 3 * 2){
//   console.log(true);
//  }

// }

// let res = numbers.find(findNumber);

//////////////////////////////////////////
// .findIndex()
// .includes() => returns a boolean value based on wheather the value ispresent or not inside the array.

// const numbers = [12,3,3,22,3,89];

// console.log(numbers.includes(22));    // true
// console.log(numbers.includes(100));    // false

// .filter() => used to filter out the values based on the condition inside the callback function (true part will get filter out & return as result).

// const numbers = [2, 3, 4, 5, 6, 7, 8, 10];

// let newArr = numbers.filter((val) => {
//   if (val % 2 == 0) {
//     return val;
//   }
// });

// console.log(newArr);

// OR

// const numbers = [2, 3, 4, 5, 6, 7, 8, 10];

// function evenOdd(n){
//   if(n % 2 == 0){
//     return numbers;
//   }
// }

// let newArr = numbers.filter(evenOdd);
// console.log(newArr);

// .slice() => used to return the sub-part of the array based on the starting & ending index.

// const n = [2,3,4,7,6,4,9];

// let newArr = n.slice(2, 6);
// console.log(newArr);

// .splice() => used to remove the range of values specified inside the splice() method based on the given number.

// const n = [2, 3, 4, 7, 6, 4, 9];

// let newArr = n.splice(1,4);
// console.log(newArr);  // return the deleted array.
// console.log(n);  // return the array after deletion of elements.
