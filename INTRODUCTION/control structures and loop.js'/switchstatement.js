// Switch statement
/*
Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
*/
// SYNTAX
switch (expression) {
    case value1:
      // Code to execute if expression === value1
      break;
    case value2:
      // Code to execute if expression === value2
      break;
    // Add more cases as needed
    default:
      // Code to execute if expression doesn't match any case
  }
  
// Example
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    default:
        console.log("Today is neither Monday nor Tuesday.");
}

