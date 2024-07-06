/*
The ternary operator is a conditional operator and can be used as a one-line if-else statement. 
The syntax is: condition ? expressionIfTrue : expressionIfFalse.

Here is an example of returning a value using an if-else statement and a refactored example using a ternary operator:
*/
//Example Code
// if-else statement
if (score > 0) {
    return score
  } else {
    return default_score
  }
  
  // ternary operator
  return score > 0 ? score : default_score
  