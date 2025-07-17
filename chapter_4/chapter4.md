

# 📚 JavaScript Arrays - Theory & Concepts




## 🔹 What is an Array?

An **array** in JavaScript is a data structure used to store a list of elements in a linear order. These elements can be:

- **Homogeneous** (e.g., all numbers or all strings)
- **Heterogeneous** (mixed types — not ideal in practice)

Arrays behave like objects where the keys are numeric indices and the values are the elements.

---

## 📌 Array Basics

- Elements are accessed using their **index**, starting from `0`
- `.length` returns the number of elements
- Arrays are **mutable**, so their contents can be updated

---

## 🔁 Looping Through Arrays

### ➤ For Loop
```js
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
````

### ➤ For...of Loop

```js
for (let value of array) {
    console.log(value);
}
```

---

## 🛠️ Common Array Methods

### `push()`

Adds elements at the end of an array.

### `pop()`

Removes the last element.

### `shift()`

Removes the first element.

### `unshift()`

Adds elements to the beginning of an array.

### `toString()`

Converts the array into a string.

### `concat()`

Merges two or more arrays into one.

### `splice(startIndex, deleteCount, item1, item2, ...)`

Adds, removes, or replaces elements in an array.

---

## 🎯 Practice Concepts Used

* Updating array values using indices
* Removing and replacing items with `splice()`
* Calculating average of numeric values in an array
* Applying discounts and updating price lists
* Removing the first element using `shift()`
* Adding an item to the end using `push()`

---

## ✅ Key Takeaways

* Arrays help manage and process multiple values efficiently.
* JavaScript provides flexible methods for modifying array contents.
* Looping techniques and built-in methods make data handling easier.

---

Thank you for Reading!