// Loops in JS

// for loop -> it is used to execute a statement/block of code until the condition is met.
// we use for loop when we know that how many no. of times we have to execute the task/block of code.

//Eg.
// wrong practice to print name 10 times
console.log("John Doe")
console.log("John Doe")
console.log("John Doe")
console.log("John Doe")
console.log("John Doe")
console.log("John Doe")
console.log("John Doe")
console.log("John Doe")
console.log("John Doe")
console.log("John Doe")

// correct practice to print name 10 times

for(let i = 1; i <= 10; i++){
    console.log("John Doe")
}

// while loop -> it is used to execute a statement/block of code until the condition is met.
// we use while loop when we do not know that how many times we have to execute the task/block of code.

let ip = 0;
let house = 40;

while(ip < house){
    ip++;
    console.log("Step Forwarded" + ip)
}

// Do While loop
// it is executed just as the while loop but it executes the statement/block of code first and then execute the condition

let ip1 = 0;
let house1 = 40;
do{
  ip1++;
  console.log("Step Forwarded" + ip1)
}
while(ip1 < house1)


// Guess the input Game
let number = 60;
let guessedNo;

do{
    guessedNo = parseInt(prompt("Enter a number: "))
    if(guessedNo == number){
      alert("Hurray! you won.")
    break;    
    }
    else{
       alert("Upps! you lost, guess the number again.")
    }
   guessedNo++;
}
while(guessedNo != 0)