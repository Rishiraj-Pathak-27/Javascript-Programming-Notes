
# Chapter 2: Operators & Conditional Statements in JavaScript

## 📘 Comments in JavaScript

### Single-Line Comment
A single-line comment starts with `//`. It's used to add notes or disable specific lines of code temporarily.

```
// This is a single-line comment
````

### Multi-Line Comment

Use `/* */` to write comments that span multiple lines.

```js
/* This is a 
multi-line comment */
```

---

## 🔢 Operators in JavaScript

Operators are symbols used to perform operations on variables and values.

### 1. Arithmetic Operators

Used to perform mathematical calculations:

* `+` Addition
* `-` Subtraction
* `*` Multiplication
* `/` Division
* `%` Modulus (Remainder)
* `**` Exponentiation (Power)

> **Example**: If `a = 5` and `b = 2`, then `a + b = 7`, `a % b = 1`, and `a ** b = 25`.

---

### 2. Unary Operators

Operators that work with a single operand.

* `++` Increment
* `--` Decrement
* `+` Converts a string to number (if possible)
* `-` Converts string to number and negates it

---

### 3. Assignment Operators

Used to assign values to variables.

* `=` assigns a value
* `+=` adds and assigns
* `-=` subtracts and assigns
* `*=` multiplies and assigns
* `/=` divides and assigns

> **Example**: `a += 5` is the same as `a = a + 5`

---

### 4. Comparison Operators

Used to compare two values and return a Boolean.

* `==` equal to (loose comparison)
* `===` equal to (strict comparison - checks data type also)
* `!=` not equal to
* `>` greater than
* `<` less than
* `>=` greater than or equal to
* `<=` less than or equal to

> **Example**: `10 === "10"` returns `false`, but `10 == "10"` returns `true`.

---

### 5. Logical Operators

Used to combine multiple conditions.

* `&&` (AND): true if both conditions are true
* `||` (OR): true if at least one condition is true
* `!` (NOT): inverts the result

> **Example**: `(a > b) && (a < c)`

---

## ✅ Conditional Statements

Conditional statements control the flow of code based on conditions.

### 1. `if` Statement

Executes a block of code **if** a specified condition is true.

```js
if (condition) {
  // code to execute
}
```

---

### 2. `if-else` Statement

Executes one block if the condition is true, otherwise the `else` block.

```js
if (condition) {
  // runs if true
} else {
  // runs if false
}
```

---

### 3. `if-else-if` Ladder

Checks multiple conditions one after the other. The first condition that matches gets executed.

```js
if (condition1) {
  // block1
} else if (condition2) {
  // block2
} else {
  // default block
}
```

---

### 4. Ternary Operator

A shorthand version of the `if-else` statement.
**Syntax**:

```js
condition ? value_if_true : value_if_false;
```

> **Example**:
> `let color = mode === "dark" ? "black" : "white";`

---

## 🧠 Practice Concepts

### 🟢 Multiple of 5 Check

You can use the modulus operator `%` to determine if a number is a multiple of 5. If `num % 5 == 0`, then it's a multiple.

---

### 🎓 Grade Calculator

Use a chain of `if-else` conditions to assign grades based on percentage:

* 80–100 → Grade A
* 70–79 → Grade B
* 60–69 → Grade C
* 50–59 → Grade D
* Below 50 → Grade F

---

## ✅ Typecasting (Coercion) in JavaScript

Typecasting (or coercion) is the process of converting a value from one type to another.

### Implicit Typecasting

Happens automatically by JavaScript during operations.

```js
"5" * 2 // Output: 10
"5" + 2 // Output: "52" (string concatenation)
```

### Explicit Typecasting

Manually converting data types using:

* `Number("123")` → converts string to number
* `String(123)` → converts number to string
* `Boolean(1)` → converts to `true`, `Boolean(0)` → `false`

---

Thank you for reading!

