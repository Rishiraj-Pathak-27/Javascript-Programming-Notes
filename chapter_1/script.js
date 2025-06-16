// CHAPTER 1 (Variables & Datatypes)

// // first program.
// // console.log("Rishiraj Pathak");
// // console.log("I love Java Script");

// // VARIABLES.

// fullname = "Tony Stark";  // string type
// age = 19; // integer type
// price = 99.99; // float type
// radius = 20; // integer type
// x = null; // null type (there is value stored but it is empty)
// y = undefined; // undefined type (don't know which value is stored)
// isFollow = false; // boolean type
// isFollow = true; // boolean type
// fullname = 25; // integer type
// apple = "fruit";        // apple & Apple --> same name with different meanings ("CASE SENSITIVE").
// APPLE = "sweet fruit";
//  // (=) assignment operator --> stores the right side data into the left side variable

// console.log(fullname);
// console.log(age);
// console.log(price);
// console.log(x);
// console.log(undefined);
// console.log(radius);
// console.log(isFollow);
// console.log(fullname);
// console.log(apple);
// console.log(APPLE);

// let, const, var

// var is old type of declaring variable, which is not used after year 2015 as "let" & "const" discovered.

// let fullName = "Rishiraj Pathak";   // "let" is a good practice for defining a variable.
// let totalPrice  = 999.99;
// let isFollow = true;
// var fname = "rishiraj";  // var is not a good practice for defining a variable.
// const lname ="pathak";
// // const lname = "agrawal";  const cannot be updated.

// console.log(lname);
// console.log(fname);
// console.log(fullName);
// console.log(totalPrice);
// console.log(isFollow);


// DATATYPES

// primitive datatypes

// let age = 19;  // int type
// let fname = "Rishiraj Pathak"; // string type
// let price = 88.88;  // float type
// let isFollow = true; // boolean type
// let x;  // undefined type
// let a = null; // null type
// let y = BigInt(123); // bigint type
// let z = Symbol("Hello World!"); // symbol type

// console.log(typeof age);
// console.log(typeof fname);
// console.log(typeof price);
// console.log(typeof isFollow);
// console.log(typeof x);
// console.log(typeof a);
// console.log(typeof y);
// console.log(typeof z);

// non-primitive datatypes (generally stored in key:value pair.)

// 1. objects (generally declared by const variable.) 
// const student = {
//     fname : "Rishiraj Pathak",
//     age: 19,
//     cgpa: 9.5,
//     isPass: true,

// };

// console.log(student);
// console.log(typeof student);
// student['age'] = student['age'] + 1;  // incrementing the age by 1 and saving it into the age variable only
// console.log(student);

// const car = {
//     company : "Mercedes",
//     model : "G-Wagon",
//     manu_year : "2024",
//     engine : "V8"
// };

// car["model"] = "Maybach";   // updating the car model from G-Wagon --> Maybach.

// console.log(car);
// console.log(typeof car);
// console.log(car["company"]);  // accesssing the value (object["key"]).
// console.log(car);

// PRACTICE QUESTIONS
// Q.1) Create a const object called "product" to store the information shown in the picture.

// const product = {
//     prod_name : "Parker Jotter Standard CT Ball Pen",
//     prod_rating : 4,
//     prod_offer : 5,
//     prod_price : 270 
// };

// console.log(product);
// console.log(typeof product);

// const employee = {
//     emp_id : 3,
//     emp_name : "John Doe",
//     emp_designation : "Developer",
//     emp_salary : "15 - 20 LPA"
// };

// console.log(`The employee ${employee.emp_name} has employee id ${employee.emp_id} and designation as ${employee.emp_designation} with salary of ${employee.emp_salary}.`);

// console.log(employee);
// employee["emp_name"] = "John Doe";
// employee["emp_id"] = employee["emp_id"] + 2;
// console.log(employee);

// ///////////////////////////////////////////////////////////////////////////////////////

