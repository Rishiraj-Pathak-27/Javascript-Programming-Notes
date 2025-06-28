// ARRAYS
// arrays in JS are used to store homogeneous data in linear way.
// but we can also store the heterogeneous data inside the array which is not a suitable way.
// arrays always return its type in the form of object bcoz as the object containe key:value pairs, the arrays also contains index:value pairs.

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

/////////////////////////////////////////////////////////////////////////

// Arrays

// let studentMarks = [34, 76, 98, 89, 87];
// console.log(studentMarks);
// console.log(studentMarks.length); // property -> used to return something

// const mobileBrands = ["samsung", "apple", "oppo", "vivo", "oneplus"];
// console.log(mobileBrands);
// console.log(mobileBrands.length);

// accessing values from arrays using indices
// console.log(studentMarks[1]);
// console.log(mobileBrands[3]);
// console.log(mobileBrands[5 - 1]); //oneplus
// console.log(mobileBrands[9]); //undefined

// updating/changing values of the arrays
// mobileBrands[1] = "nothing";
// mobileBrands[3] = "redmi";
// console.log("Updated mobile brands = ", mobileBrands);

// printing all the elements of an array (looping over array)

let techCompanies = [
  "Infosys",
  "Google",
  "Amazon",
  "Microsoft",
  "Capgemini",
  "Tech Mahindra",
];

// using for loop

// for(let i = 0; i < techCompanies.length; i++){
//     console.log(techCompanies[i]);
// }

// using while loop

// let i = 0
// while(i < techCompanies.length){
//     console.log(techCompanies[i]);
//     i++;
// }

// using do...while loop

// let i = 0;
// do{
//     console.log(techCompanies[i]);
//     i++
// }while(i < techCompanies.length);

// using for...of loop

// for(let company of techCompanies){
//     console.log(company);
// }

// using for...in loop

// for(let company in techCompanies){
//     console.log(techCompanies[company]);
// }

// calculate sum and avg of student marks.

// let studentMarks = [85, 97, 44, 37, 76, 60];
// let markSum = 0;

// for (let sum of studentMarks) {
//   markSum += sum;
// }
// console.log(`Sum of student marks = ${markSum}`);
// console.log(`Average of student marks = ${markSum / studentMarks.length}`);

// let itemPrices = [250, 645, 300, 900, 50];
// let sum = 0;
// let newArrPrice = [];
// let newArrDiscount = [];
// for (let price of itemPrices) {
//   let discount = price / 10;
//   newArrDiscount.push(discount);
//   let discountPrice = price - price / 10;
//   newArrPrice.push(discountPrice);
//   sum += discountPrice;
// }
// console.log(
//   `10% discount on the original price comes out to be = [${newArrDiscount}]`
// );
// console.log(`Prices after 10% discount = [${newArrPrice}]`);
// console.log(`Total sum of items after 10% discount = ${sum}`);

// OR

// let itemPrices = [250, 645, 300, 900, 50];

// let i = 0;

// for(let val of itemPrices){
//     let offer = val - (val/10);  
//     console.log(`Price after offer = ${offer}`);
//     i += offer;
// }
// console.log("Total =",i);

// OR

// let itemPrices = [250, 645, 300, 900, 50];
// let sum = 0;
// for (let i = 0; i < itemPrices.length; i++) {
//   let discountPrice = itemPrices[i] - (itemPrices[i] / 10);
//   console.log(`Price after offer = ${discountPrice}`);
//   sum += discountPrice;
// }
// console.log("Total =", sum);
