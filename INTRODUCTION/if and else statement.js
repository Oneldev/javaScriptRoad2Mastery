// An if statements allows you to run a block of code
// only when a condition is met

// SYNTAX
if (condition) {
    logic
  }

//   Example 1
if (true) {
    console.log("Condition is true")
  }
// it prints to the console

/* what are truthy values 
This are values that javascript evaluates to true value when used in a if condition
*/


/*Falsy values are the opposite of truthy values
false, 0, "", null, undefined, NaN
*/ 

// ELSE IF STATEMENT
/* They allow you to check multiple condition in a single block of code
*/
// SYNTAX
if (condition1) {
    // code to run if condition1 is true
  } else if (condition2) {
    // code to run if condition2 is true
  } else if (condition3) {
    // code to run if condition3 is true
  } 
/* Note if first condition is false, javascript checks the next condition until it 
 it gets to the one with boolean value of true.
*/
// Example 1
 if ("") {
    console.log("condition is true");
 }
 else if ( 5 < 10) {
  console.log("5 is less than 10");
 }

//  ELSE STATEMENT
/*
 It only executes when all the statement in if and else if block 
 evaluate to be false
*/
// SYNTAX
if (condition) {
    // this code will run if condition is true
  } else if (condition2) {
    // this code will run if the first condition is false
  } else {
    // this code will run 
    // if the first and second conditions are false
  }

// Example 1
if ("") {
    console.log("Condition is true");
  } else if (5 > 10) {
    console.log("5 is less than 10");
  }
  else {
    console.log("This is the else block")
  }



