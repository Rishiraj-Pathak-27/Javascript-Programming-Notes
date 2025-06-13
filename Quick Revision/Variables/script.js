// Variables
// var | let | const

// var
// can be reassigned many times
// follows global scope
// can be accessed anywhere as it follows global scope

// Java, C,etc. -> are strongly typed languages
// JS -> is aloosly typed language

var personAge = 19;
console.log(personAge);

// Naming Conventions
// firstname
// firstName  -> Camel Casing
// first_name
// first_name
// Firstname
// First_name

// eg.
 var age = 20;
if (true) {
 console.log(age)
}


// let 
// can be reassigned many times
// follows local scope
// cannot be accessed anywhere excepting local scope (khud ke block k andar)

// let carName = "mustang";
// console.log(carName);

// eg.
if (true) {
  let carName = "Corvette";
  console.log(carName); // correct form
}
carName = "Corvette";  // redeclaring can be used like var 
console.log(carName); // incorrect form as it is follows local scope 

// const -> Follows local scope
// Values cannot be redeclared once declared
// cannot be accessed anywhere excepting local scope (khud ke block k andar)

const brandName = "Nike";
brandName = "Jordan"          //  const once decleared will be never redeclared 
console.log(brandName);


