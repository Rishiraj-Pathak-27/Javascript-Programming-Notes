# Chapter 3: Loops & Strings in JavaScript

## 🪢 General Types of Loops

### ➤ `for` Loop

* Used when the number of iterations is known.
* **Syntax**:

  ```
  for (initialization; condition; updation) {
    // code block
  }
  ```

### ➤ `while` Loop

* Used when the number of iterations is unknown and depends on a condition.
* **Syntax**:

  ```
  initialization
  while (condition) {
    // code block
    updation
  }
  ```

### ➤ `do...while` Loop

* Similar to the `while` loop but guarantees at least one execution.
* **Syntax**:

  ```
  initialization
  do {
    // code block
    updation
  } while (condition);
  ```

---

## 🔁 Special Loop Types

### ➤ `for...of` Loop

* Iterates over iterable data types like **strings, arrays** etc...
* Provides direct access to values.
* **Syntax**:

  ```
  for(let variable_name of datatype_name){
    //block of code
  }
  ```

---

### ➤ `for...in` Loop

* Iterates over **enumerable properties of objects** (also works with arrays, though not preferred).
* Provides access to **keys** or **indexes**.
* **Syntax**:

  ```
  for(let variable_name in datatype_name){
    //block of code
  }
  ```

---

## 🎯 String Concepts

### ➤ Declaring Strings

* Strings in JavaScript can be declared using **single quotes (`''`)**, **double quotes (`""`)**, or **backticks (``)** for template literals.

### ➤ Template Literals

* A type of string enclosed in backticks.
* Allows **expression embedding** using `${variable}`.

### ➤ Escape Characters

* `\n` → New Line
* `\t` → Tab Space

---

## 🧰 Common String Methods

| Method              | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `toUpperCase()`     | Converts the entire string to **uppercase**.                 |
| `toLowerCase()`     | Converts the entire string to **lowercase**.                 |
| `trim()`            | Removes **leading and trailing spaces**.                     |
| `slice(start, end)` | Extracts a part of the string from `start` to `end-1`.       |
| `concat(str2)`      | Combines the string with another string.                     |
| `replace(a, b)`     | Replaces the first occurrence of string `a` with string `b`. |
| `replaceAll(a, b)`  | Replaces **all** occurrences of `a` with `b`.                |
| `charAt(index)`     | Returns the character at the specified index.                |
| `length`            | Returns the total **number of characters** in the string.    |

---

## 🔍 String Checks

| Method            | Description                                               |
| ----------------- | --------------------------------------------------------- |
| `includes(str)`   | Returns `true` if the given substring is found.           |
| `startsWith(str)` | Checks if the string **starts** with the given substring. |
| `endsWith(str)`   | Checks if the string **ends** with the given substring.   |
| `indexOf(str)`    | Returns the **first index** of the specified substring.   |

---

Thank you for reading!




