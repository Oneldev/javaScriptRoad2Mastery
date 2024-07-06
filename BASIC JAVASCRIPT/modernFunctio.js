/* 1. old Style Function Declaration (Pre-ES6)
Syntax
In older versions of JavaScript (before ES6), functions were typically declared using the function keyword. Here's the basic syntax:
*/
// EXAMPLE 
function functionName(parameters) {
    // function body
}
// EXAMPLE 2
function add(a, b) {
    return a + b;
}
/* DIAGRAM
+-------------------------+
| function add(a, b) {    |
|     return a + b;       |
| }                       |
+-------------------------+
| Function Name: add      |
| Parameters: a, b        |
| Return Value: a + b     |
+-------------------------+
*/

/* 2.Modern Style Function Declaration (ES6 and later)
Arrow Functions
ES6 introduced arrow functions, which provide a more concise way to write functions.
*/
// Syntax
const functionName = (parameters) => {
    // function body
}
//Example 
const add = (a, b) => {
    return a + b;
}
/* Shortened Syntax for Single Expression
If the function body has only one expression, you can omit the curly braces and the return keyword.
*/
// Example
const add = (a, b) => a + b;
/* DIAGRAM
+--------------------------------------+
| const add = (a, b) => {              |
|     return a + b;                    |
| }                                    |
+--------------------------------------+
| Function Name: add (as a constant)   |
| Parameters: a, b                     |
| Return Value: a + b                  |
+--------------------------------------+
*/

/* 3. Function Expression
Function expressions are used when you want to create a function and assign it to a variable.
*/
//Syntax
const functionName = function(parameters) {
    // function body
}
//Example
const add = function(a, b) {
    return a + b;
}
/*Diagram
+--------------------------------------+
| const add = function(a, b) {         |
|     return a + b;                    |
| }                                    |
+--------------------------------------+
| Function Name: add (as a constant)   |
| Parameters: a, b                     |
| Return Value: a + b                  |
+--------------------------------------+
*/

/*Advantages of Arrow Functions
Concise Syntax: Arrow functions are shorter and easier to read.
Lexical this Binding: Unlike traditional functions, arrow functions do not have their own this context. 
They inherit this from the parent scope, which makes them particularly useful in certain contexts, such as in event handlers or callbacks.

The statement simply means How this inherits its value at different scope

Lexical this Binding Explained Further
Traditional Functions and this
In traditional functions, the value of this is determined by how the function is called.
*/
// Example 1: Traditional Function
function TraditionalExample() {
    console.log(this);
}

TraditionalExample();  // Outputs: global object (or undefined in strict mode)
// Example 2: Traditional Function in an Object
const obj = {
    name: 'Alice',
    greet: function() {
        console.log(this.name);
    }
};

obj.greet();  // Outputs: 'Alice'
//In this example, this refers to the obj object because greet was called as a method of obj.

/* Problem with Traditional Functions in Callbacks
When traditional functions are used inside other functions or methods, the this context can get confusing.
*/
//Example: Callback Function 
const object = {
    name: 'Alice',
    greet: function() {
        setTimeout(function() {
            console.log(this.name);
        }, 1000);
    }
};

obj.greet();  // Outputs: undefined or causes an error
// Here, this.name inside setTimeout does not refer to obj anymore, but to the global object or undefined.

/* Arrow Functions and Lexical this
Arrow functions, introduced in ES6, do not have their own this context. Instead, they inherit this from the parent scope.
*/
// Example: Arrow Function in an Object
const object1 = {
    name: 'Alice',
    greet: function() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

obj.greet();  // Outputs: 'Alice'
// In this example, this inside the arrow function refers to the this value from the greet function, which is obj.



/* ILLUSTRATION WITH REAL WORLD EXAMPLES
Scenario: A Party Organizer
Imagine you are organizing a party, and you have a friend (let’s call them obj). Your friend is responsible for greeting guests.

Traditional Function Scenario
Your friend (obj) assigns someone else (a traditional function) to greet guests after 1 second. When the time comes, that person doesn’t remember who your friend is and greets using their own information (which is incorrect).
*/
//Example
const friend = {
    name: 'Alice',
    greetGuests: function() {
        setTimeout(function() {
            console.log("Hi, I am " + this.name);  // this is not 'Alice'
        }, 1000);
    }
};

friend.greetGuests();  // Outputs: Hi, I am undefined

/*Arrow Function Scenario
Your friend (obj) assigns themselves (an arrow function) to greet guests after 1 second. 
When the time comes, they remember who they are and greet guests correctly.
*/
// Example 
const friend1 = {
    name: 'Alice',
    greetGuests: function() {
        setTimeout(() => {
            console.log("Hi, I am " + this.name);  // this is 'Alice'
        }, 1000);
    }
};

friend.greetGuests();  // Outputs: Hi, I am Alice

// IN AN EVENT HANDLER SCENARIO
/*
Scenario: Event Handler with Traditional Function
When using traditional functions as event handlers, the this keyword inside the function refers to the element that triggered the event. 
If you want to access the parent scope's this inside the event handler, you'll need to use techniques like bind(), or store this in a variable.
*/
// Example: Traditional Function in an Event Handler
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Event Handler Example</title>
</head>
<body>
    <button id="myButton">Click me!</button>

    <script>
        const obj = {
            name: 'Alice',
            handleClick: function() {
                const that = this; // Store the context of `this`
                document.getElementById('myButton').addEventListener('click', function() {
                    console.log(that.name); // Use stored context
                });
            }
        };

        obj.handleClick(); // Outputs: 'Alice' when button is clicked
    </script>
</body>
</html>
*/
/* In this example, inside the addEventListener callback, this refers to the button element (myButton). 
To access the name property of obj, we need to store this in a variable (that).
*/

// Scenario: Event Handler with Arrow Function
/*
 With arrow functions, this is lexically bound to the surrounding scope. 
 This means you can directly access the parent scope's this without additional steps.
*/
//Example: Arrow Function in an Event Handler
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Event Handler Example</title>
</head>
<body>
    <button id="myButton">Click me!</button>

    <script>
        const obj = {
            name: 'Alice',
            handleClick: function() {
                document.getElementById('myButton').addEventListener('click', () => {
                    console.log(this.name); // `this` refers to `obj`
                });
            }
        };

        obj.handleClick(); // Outputs: 'Alice' when button is clicked
    </script>
</body>
</html>
*/
/*
In this example, the arrow function inside the addEventListener callback inherits this from the handleClick function, which is the obj object. 
This allows direct access to obj.name without needing to store this in a variable.
*/



