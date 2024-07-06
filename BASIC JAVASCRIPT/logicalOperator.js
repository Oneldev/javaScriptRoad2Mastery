// LOGICAL OPERATORS
/* Logical operators are like connectors in sentences. They help combine multiple conditions (statements) and make decisions based on whether those conditions are true or false. 
In JavaScript, there are three main logical operators: AND (&&), OR (||), and NOT (!)
*/

/*
1. AND (&&)
Description: The AND operator combines two conditions and returns true only if both conditions are true.
Analogy: Imagine you can only go outside if it’s both sunny AND not raining. Both conditions must be true.
*/
//Example 
let isSunny = true;
let isRaining = false;

if (isSunny && !isRaining) {
    console.log("You can go outside!");
} else {
    console.log("You have to stay inside.");
}
/*
Explanation: In this example, isSunny is true, and !isRaining (not raining) is also true. 
Since both conditions are true, the message "You can go outside!" is displayed.
*/
//illustration
/*
Condition 1: Is it sunny?  →  True
Condition 2: Is it raining? →  False
-----------------------------------
Result: Can you go outside?  →  Yes (True)
*/

/*
2. OR (||)
Description: The OR operator combines two conditions and returns true if at least one of the conditions is true.
Analogy: Imagine you can have dessert if you finish your vegetables OR if it’s your birthday. 
Only one condition needs to be true. 
*/
//Example
let finishedVegetables = true;
let isBirthday = false;

if (finishedVegetables || isBirthday) {
    console.log("You can have dessert!");
} else {
    console.log("No dessert for you.");
}
//Illustration
/*Condition 1: Did you finish your vegetables?  →  True
Condition 2: Is it your birthday?  →  False
------------------------------------------
Result: Can you have dessert?  →  Yes (True)
*/


/*
3. NOT (!)
Description: The NOT operator reverses the truthiness of a condition. 
If a condition is true, NOT makes it false, and vice versa.
Analogy: Imagine you’re checking if a box is NOT empty. 
If the box is empty, the statement “The box is NOT empty” is false.
*/
//Example 
let isEmpty = true;

if (!isEmpty) {
    console.log("The box is not empty.");
} else {
    console.log("The box is empty.");
}
/*
Explanation: In this example, isEmpty is true, but !isEmpty (NOT empty) is false. So, the message "The box is empty." is displayed.
*/
//Illustration
/*
Condition: Is the box empty?  →  True
----------------------------------
Result: Is the box NOT empty?  →  No (False)

*/