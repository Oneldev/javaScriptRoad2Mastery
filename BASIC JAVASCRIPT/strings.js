// refer to the regular expression to better understand your code.
// REPLACE Method
/*
JavaScript provides a .replace() method that enables you to replace characters in a string with another string. 
This method accepts two arguments. 
The first argument is the character sequence to be replaced, which can be either a string or a regex pattern. 
The second argument is the string that replaces the matched sequence.

Since strings are immutable, the replace method returns a new string with the replaced characters.

In this example, the replace method is used to replace all instances of the letter l with the number 1 in the string hello.
*/
// Example 
"hello".replace(/l/g, "1");
// here you replacing all instances of l with 1.

// Match Method
/*
Strings have a .match() method, which takes a regex argument. 
.match() will return an array of match results – containing either the first match, or all matches if the global flag is used.
*/
//Example
const str = 'example string';
const regex = /example/;
const result = str.match(regex); // Returns ['example']
