// ARRAYS

// let cut_off = [98, 89, 78, 87, 90, 99, 92, 83];
// console.log(cut_off);
// console.log(cut_off.length);

// let students = ["John", "Doe", "Jane", "Doe", "James", "Bond"];
// console.log(students);
// console.log(students.length);
// students[3] = "Peter";
// console.log(students);
// console.log(typeof students);

//  ARRAY INDICES

// let cut_off = [98, 89, 78, 87, 90, 99, 92, 83];
// console.log(cut_off);
// console.log(cut_off[0]);

// LOPPING OVER ARRAYS

// let cut_off = [98, 89, 78, 87, 90, 99, 92, 83];
// for(let i = 0; i <= cut_off.length; i++){           // using length function to print the array
//     console.log(cut_off[i]);
// }

//  OR

// for(let i = 1; i <= cut_off.length; i++){           // using length function to print the array
//     console.log(cut_off[i - 1]);
// }

// using for of loop

// for (let i of cut_off){
//     console.log(i);
// }

// let cities = ["Pune", "Hyderabad", "Mumbai", "Bangalore", "Chennai"];
// for(let i=0; i< cities.length; i++){
//     // console.log(cities[i]);
//     console.log(cities[i].toUpperCase());
// }

// OR

// for(let i of cities){
//     console.log(i.toLowerCase());
// }

//////////////////////////////////////////////////////////

// Practice Questions

// let marks_students = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let i of marks_students){
//      sum += i;

// }

// let average = sum / marks_students.length;
//     console.log(`The average marks of the students from the class = ${average}`);

// let price_items = [250, 645, 300, 900, 50];
// let index = 0;
// for (let i of price_items) {
//     console.log(`The Value at index ${index} = ${i}`);
//     let offer = i / 10;
//     price_items[index] = price_items[index] - offer;
//     console.log(`The Value after offer = ${price_items[index]}`);
//     index++;
// }

// OR {Using for loop}

// let price_items = [250, 645, 300, 900, 50];
// let index = 0;
// for(let i = 0; i < price_items.length; i++){
//     console.log(`The Value before offer = ${price_items[i]}`);
//     let offer = price_items[i] / 10;
//     price_items[i] = price_items[i] - offer;
//     console.log(`The Value After offer = ${price_items[i]}`);
// }

// ARRAY METHODS

// push() - Adds an element to the end of an array
// pop() - Removes the last element from an array
// shift() - Removes the first element from an array
// toString() - Converts an array to a string
// unshift() - Adds an element to the beginning of an array
//concat() - Joins two or more arrays

//let currencies = ['Dollar', 'Dirham', 'Rupee', 'Yen'];
// currencies.push('Pound','dinar', 'Euro');
// console.log(currencies);

// currencies.pop();
// console.log(currencies);

// console.log(currencies);
// console.log(currencies.toString());

// let even_numbers = [2, 4, 6, 8, 10];
// let odd_numbers = [1, 3, 5, 7, 9];
// console.log(even_numbers.concat(odd_numbers));

// let even_numbers = [2, 4, 6, 8, 10];
// // even_numbers.unshift(1);
// // console.log(even_numbers);
// let value = even_numbers.shift();
// console.log(`The deleted value is ${value}`);


// Practice Questions.

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// remove = companies.shift();
// console.log(remove);

// remove_add = companies.splice(2,1,"Ola");
// console.log(remove_add);

// push_element = companies.push("Amazon");


