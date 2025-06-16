# JavaScript Notes
*Date:* 13/06/2025  

## Chapter 1: Introduction to JavaScript

JavaScript is a lightweight, interpreted programming language primarily known for adding interactivity and functionality to webpages.

### Key Features:
- JavaScript is a web-based programming language
- Used for both frontend and backend development (making it a full-stack language)
- Can add functionality to webpage components (buttons, sliders, etc.)
- Can connect to databases and make web browsers
- Originally designed to run in web browsers using:
  - V8 Engine (Chrome)
  - SpiderMonkey (Firefox)
- Latest version is ES6 (ECMAScript 2015)

---

## Variables in JavaScript

A variable is a container that holds a value (which can be of any data type).

### Variable Declaration Methods:

#### 1. var
- The oldest variable declaration method
- *Syntax:*

  ```javascript

  var variableName = value;

# JavaScript var Examples

## Basic var Declaration
javascript

var message = "Hello World";

console.log(message); // Output: "Hello World"


## Re-declaration with var
javascript

var count = 10;

var count = 20; // Allowed with var

console.log(count); // Output: 20


## Function Scope Example
javascript

function testVar() {

  var x = 10;

  if (true) {

    var x = 20; // Same variable

    console.log(x); // Output: 20

  }

  console.log(x); // Output: 20 (not block-scoped)

}

testVar();

## Global Scope Example
javascript

var globalVar = "I'm global";

function checkScope() {

  console.log(globalVar); // Output: "I'm global"

  globalVar = "Modified!";

}

checkScope();

console.log(globalVar); // Output: "Modified!"


## Key Characteristics of var:
1. 🟡 Function-scoped (not block-scoped)
2. 🟡 Can be re-declared and updated
3. 🟡 Variables are hoisted (declaration moved to top)
4. 🟡 Becomes property of window object (in browsers)
5. 🟡 Considered legacy - prefer let/const in modern JS


---

#### 2. let 

The let keyword declares block-scoped variables:

javascript

let age = 25;


### Characteristics:
- 🔹 Always follows block scope (local scope)
- 🔹 Can be reassigned but cannot be redeclared in the same scope
- 🔹 Only accessible within its block scope

### Example:
javascript

if (true) {

  let age = 19;

  console.log(age); // Output: 19

  age = 20; // Reassignment allowed

  console.log(age); // Output: 20

}

console.log(age); // Error: age is not defined


To use globally:
javascript

let globalAge; // Declaration

globalAge = 30; // Assignment


## 3. const Declaration

The const keyword declares constants:

javascript

const PI = 3.14;


### Characteristics:
- 🔹 Always follows block scope (local scope)
- 🔹 Cannot be redeclared or reassigned after initialization
- 🔹 Must be initialized during declaration

### Example:
javascript

const carName = "Mustang";

console.log(carName); // Output: "Mustang"

carName = "Gwagon"; // Error: Assignment to constant variable


---


# Data Types in JavaScript

## Primitive Data Types

1. *Number*:
   javascript

   let num1 = 3.14;    // Float

   let num2 = 10;      // Integer

   // Note: JavaScript doesn't have native complex numbers
   

2. *String* (text within quotes):
   javascript

   let single = 'Single quotes';

   let double = "Double quotes";

   let backticks = `Template literals`;
   

3. *Boolean* (true/false):
   javascript

   let isActive = true;

   let isAdmin = false;
   

4. *undefined* (uninitialized variable):
   javascript

   let x;

   console.log(x); // Output: undefined
   

5. *null* (intentional empty value):
   javascript

   let empty = null;
   

## Non-Primitive (Reference) Data Types

1. *Object*:
   javascript

   let person = {

     name: "John",

     age: 30

   };
   

2. *Array*:
   javascript

   let colors = ["red", "green", "blue"];
   

3. *Function*:
   javascript

   function greet() {

     console.log("Hello!");

   }
   

## Type Conversion Examples

javascript

// String to Number

let str = "123";

let num = Number(str);

// Number to String

let numValue = 456;

let strValue = String(numValue);


## Key Notes:
- JavaScript is dynamically typed
- Use typeof operator to check types
- Template literals (backticks) allow string interpolation


# JavaScript Data Types (Continued)

## 1. Strings

Strings represent textual data and can be declared in three ways:

javascript

let firstName = "John";  // Double quotes

let lastName = 'Doe';   // Single quotes

let greeting = `Hello ${firstName}`;  // Template literals (ES6)


### Concatenation Examples:
javascript

console.log("Hello " + "World");  // Output: "Hello World"

console.log("3" + "2");          // Output: "32" (string concatenation)

console.log(3 + 2);              // Output: 5 (number addition)


## 2. Booleans

Return only true or false values:

javascript

let isLoggedIn = true;

console.log(isLoggedIn);  // Output: true

let hasPermission = false;

console.log(hasPermission);  // Output: false


## 3. Null

Represents intentional absence of any object value:

javascript

let lastLoggedIn = null;

console.log(lastLoggedIn);  // Output: null

// Note: null is an assigned value meaning "no value"

// typeof null returns "object" (historical JavaScript bug)


## 4. Undefined

Represents a variable that has been declared but not assigned:

javascript

let lastLoggedInDate;

console.log(lastLoggedInDate);  // Output: undefined

let activeUser = undefined;

console.log(activeUser);  // Output: undefined


## 5. Objects

Collections of key-value pairs:

javascript

const empData = {

  firstName: "John",

  lastName: "Doe",

  age: 30,

  isAdmin: false,

  lastLoggedIn: undefined,

  department: null

};

console.log(empData);
/* Output:
{

  firstName: "John",

  lastName: "Doe",

  age: 30,

  isAdmin: false,

  lastLoggedIn: undefined,

  department: null

}
*/

// Accessing properties

console.log(empData.firstName);  // Output: "John"

console.log(empData['lastName']); // Output: "Doe"


## Key Differences:

| Type       | Example             | Description                          |
|------------|---------------------|--------------------------------------|
| String     | "Hello"           | Textual data                         |
| Boolean    | true/false      | Logical values                       |
| Null       | null              | Intentional empty value              |
| Undefined  | undefined         | Uninitialized variable               |
| Object     | {key: value}      | Collection of properties             |

## Additional Notes:
- Use === for strict equality checks (includes type checking)
- Template literals (backticks) allow multi-line strings and interpolation
- null is an assignment value, while undefined means "not assigned"
- Objects can contain any combination of data types <br><br><br>

Thank you for reading!

---



