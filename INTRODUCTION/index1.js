// LECTURES ON CREATING A VARIABLE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// We initialize the above variable by 
// assigning a value
let character= "Hello";
// Strings are immutable once created they cant be changed,
// although you can reassign value to the container.
console.log(character);
// When reassigning a variable you dont use the let keyword again
character = 'World';
console.log(character);

// Using Camel Case in the below to declare a variable
// Part of javascript Standard.
let secondCharacter;
console.log(secondCharacter);
secondCharacter = "Test";
secondCharacter = character;
console.log(secondCharacter);
let profession;
let age;
profession = "teacher";
console.log(profession);
console.log(age);
let count = 8;
console.log(count + 1);


// LECTURES ON ARRAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Note primitive can hold on value data
// Note non-primitive can hold complex data
// Here is how to creat an empty array below.

let rows = ["Naomi", "Quincy", "CamperChan"];
// accessing an array with its index below 
console.log(rows[0]);
// Note they are mutable(Can be changed)
rows[rows.length - 1] = 10;
console.log(rows);

let names = [];
names = ["Peace", "Ruth", "Victory"];
console.log(names[names.length - 1]);



// USING ARRAY METHODS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// methods are functons inside object, given the object a functionality
// push adds to the end of the array
rows.push("MyCode");
// For pop it removes the last element
let popped = row.pop();

// EQUALITY OPERATOR
/*
As the name implies, they are use for comaparing two values
*/
a = 5;
b = "5";

// Double Equality

console.log(a == b); /* true */

// Triple Equality
console.log(a === b); /* false */

// Key Points
// == (Double Equals)

// Converts values to the same type before comparing.
// Can lead to unexpected results due to type conversion.

// === (Triple Equals)
// Does not convert types.
// Compares both value and type.
// Preferred for most comparisons to avoid unexpected type coercion.

// Double Equals(Loose Equality)
console.log(0 == false); // true
console.log(null == undefined); // true
console.log(1 == "1"); // true

// Triple Equals(Strict Equality)
console.log(0 === false); // false
console.log(null === undefined); // false
console.log(1 === "1"); // false