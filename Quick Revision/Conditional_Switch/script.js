// Conditional Statements
// if-else
// User is eligible to vote or not
const age = 19;

if(age >= 18){
    console.log("You are eligible to vote.")
}
else{
    console.log("You are not eligible to vote.")
}

// ternary operator
// syntax -> condition ? true_statement : false_statement
const votingAge = 35;
let res = votingAge >= 18 ? "Eligible to vote" : "Not Eligible to vote"
console.log(res)

// Switch Statement
const languages = 2;

switch(languages){
    case 1: {
       console.log("English")
    }
    break;
    case 2: {
        console.log("Hindi")
    }
    break;
    case 3: {
        console.log("Marathi")
    }
    break;
    default: {
        console.log("Invalid Language")
    }
}
