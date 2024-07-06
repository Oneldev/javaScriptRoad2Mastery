// FUNCTIONS
// Syntax
function name(parameter) {

}
// note function return undefined as their value, and they 
// always return a value
function padRow(name) {
 return name;
}

// calling the function 
name(argument);
padRow('NATHAN');

// assigning the value in a function to a variable
const call = padRow('NATHAN');

// working with functions
function addTwoNumbers(num1, num2) {
    return num1 + num2;
    // the return keyword stops the execution of the code
    // anything placed outside here wont run
 }
 const sum = addTwoNumbers(5,10);
 console.log(sum);


//  GLOBAL SCOPE AND LOCAL SCOPE
//  You can use a global scope variable anywhere in your code
// You can not use a function scope which is local, outside your function.
// unless like this

function blockScope() {
    const test = "testing";
    return test;
}

console.log(blockScope());