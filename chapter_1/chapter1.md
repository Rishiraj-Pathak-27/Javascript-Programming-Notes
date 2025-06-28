# JavaScript Notes

## Chapter 1: Introduction to JavaScript

JavaScript is a lightweight, interpreted programming language primarily known for adding interactivity and functionality to webpages.

### Key Features:

* JavaScript is a web-based programming language.
* Used for both frontend and backend development (making it a full-stack language).
* Can add functionality to webpage components (buttons, sliders, etc.).
* Can connect to databases and make web browsers.
* Originally designed to run in web browsers using:

  * V8 Engine (Chrome)
  * SpiderMonkey (Firefox)
* Latest major update: ES6 (ECMAScript 2015)

---

## Variables in JavaScript

A variable is a container that holds a value which can be of any data type.

### Variable Declaration Methods:

#### 1. `var`

* Function-scoped, not block-scoped.
* Can be re-declared and updated.
* Hoisted to the top of their scope.
* Becomes a property of the window object in browsers.
* Considered legacy; prefer `let` or `const` in modern JavaScript.

#### 2. `let`

* Block-scoped (local to the block where declared).
* Can be reassigned but not redeclared in the same scope.
* Not attached to the window object.

#### 3. `const`

* Also block-scoped.
* Cannot be reassigned or redeclared.
* Must be initialized at the time of declaration.

---

## Data Types in JavaScript

### Primitive Data Types:

1. **Number**: Used for both integers and floating-point numbers.
2. **String**: A sequence of characters, enclosed in single, double, or backtick quotes.
3. **Boolean**: Represents logical entities - `true` or `false`.
4. **undefined**: A variable that has been declared but not assigned a value.
5. **null**: Represents an intentional absence of any object value.

### Non-Primitive (Reference) Data Types:

1. **Object**: A collection of key-value pairs.
2. **Array**: A list-like structure to store multiple values.
3. **Function**: A block of code designed to perform a task.

### Type Conversion:

* JavaScript allows dynamic type conversion.
* `typeof` operator can be used to check variable types.
* Template literals using backticks allow for expression embedding and multi-line strings.

---

## JavaScript Data Types (Continued)

### Strings

* Can be created using single quotes, double quotes, or backticks.
* Template literals (backticks) support variable interpolation.

### String Concatenation:

* Combines two or more strings.
* Can use the `+` operator or template literals.

### Booleans

* Return only `true` or `false` values.
* Commonly used in condition checking and logic control.

### Null vs Undefined

* `null` is explicitly assigned to represent "no value".
* `undefined` means a variable has been declared but not assigned.
* `typeof null` is an object (JavaScript bug).

### Objects

* Hold structured data in key-value pairs.
* Keys are strings, values can be any data type.
* Access via dot notation or bracket notation.

### Key Differences Between Types:

| Type      | Description                     |
| --------- | ------------------------------- |
| String    | Textual data                    |
| Boolean   | Logical values (`true`/`false`) |
| Null      | Intentional empty value         |
| Undefined | Declared but not assigned       |
| Object    | Collection of properties        |

---

## Typecasting in JavaScript

Typecasting (also called type conversion) is the process of converting one data type to another.

### Types of Typecasting:

#### 1. Implicit Typecasting (Type Coercion)

* Done automatically by JavaScript.
* Example: Adding a string and number results in a string.
* `"5" + 2` becomes `"52"` (number is converted to string).

#### 2. Explicit Typecasting

* Manually done using built-in functions.

### Examples:

* **String to Number**:

  * `Number("123")` returns `123`
* **Number to String**:

  * `String(456)` returns `"456"`
* **Boolean to String**:

  * `String(true)` returns `"true"`
* **String to Boolean**:

  * `Boolean("hello")` returns `true`
  * `Boolean("")` returns `false`

### Notes:

* `parseInt()` is used to convert string to integer.
* `parseFloat()` is used for converting to floating-point number.
* `isNaN()` can be used to check if the value is Not-a-Number.

---

### Additional Notes:

* Use `===` for strict equality (checks type and value).
* Use `typeof` to determine the type of a variable.
* Objects can hold combinations of all other types.
* Strings support a variety of methods and properties for manipulation.

---

Thank you for reading!
