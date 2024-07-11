/*
To match specific characters in a string, you can use Regular Expressions or "regex" for short.

Regex in JavaScript is indicated by a pattern wrapped in forward slashes. 
"Regex pattern finds specific text in a string. Example: /cat/ matches 'cat' in 'The cat sleeps.'"
The following example will match the string literal "hello":
 */
const text = "hello, hi, yo";
const regex = /hello/;
const matches = text.match(regex);
console.log(matches);

/*
In regular expressions, the + symbol has a special meaning as a quantifier. It means "one or more" of the preceding character or group. Here’s a breakdown:

Special Meaning of + in Regular Expressions
Quantifier: The + symbol indicates that the preceding character or group must appear one or more times.
Examples
1. Single Character:

Pattern: /a+/
-- Description: Matches one or more 'a' characters.
-- Example Matches: "a", "aa", "aaa", etc.
-- Example Non-Matches: "b", "ab"
2. Character Class:

Pattern: /[a-z]+/
-- Description: Matches one or more lowercase letters.
-- Example Matches: "abc", "hello", "world"
-- Example Non-Matches: "123", "!@#"
3. Group:

Pattern: /(abc)+/
-- Description: Matches one or more occurrences of the string "abc".
-- Example Matches: "abc", "abcabc", "abcabcabc"
-- Example Non-Matches: "ab", "abca"

Escaping Special Characters
To use the + symbol as a literal character (i.e., to match the + symbol itself), you need to escape it with a backslash (\). This tells the regex engine to treat + as a normal character, not as a quantifier.

Example
1. Literal +:
-- Pattern: /\+/
-- Description: Matches the + character.
-- Example Matches: "+", "a+b", "1+2=3"
-- Example Non-Matches: "a", "b", "123"
*/

// SHORTHAND USING BACKSLASH
/*
In regex, shorthand character classes allow you to match specific characters without having to write those characters in your pattern. 
Shorthand character classes are preceded with a backslash (\). 
The character class \s will match any whitespace character. Add this to your regex pattern.
 */

//ALLOW THE COMPILER TO CHECK RANDOML, INDIVIDUALLY  
/* 
Your current pattern won't work just yet. 
/+-\s/ looks for +, -, and a space in order. 
This would match +- hello but would not match +hello.

To tell the pattern to match each of these characters individually, you need to turn them into a character class. 
This is done by wrapping the characters you want to match in brackets. 
For example, this pattern will match the characters h, e, l, or o:
*/
//Example
const regex1 = /[helo]/;

/* 
Note that you no longer need to escape the + character, because you are using a character class.
*/

// FLAGS
/* G- global search global for all instances
Regex can also take specific flags to alter the pattern matching behavior. 
Flags are added after the closing /. The g flag, which stands for "global", will tell the pattern to continue looking after it has found a match. 
Here is an example:
*/
// Example
const helloRegex = /hello/g;
/*
 i- insensitive 
 The i flag in a regex makes the pattern case-insensitive, matching text regardless of letter case.
 */
// Example
const regex12 = /hello/i;
console.log(regex.test('Hello')); // Output: true
console.log(regex.test('HELLO')); // Output: true
console.log(regex.test('hElLo')); // Output: true
//The regex /hello/i matches 'hello' in any combination of uppercase and lowercase letters.
/*
When entering scientific notation, e or E can be used (e.g., 1e10 or 1E10). 
The i flag in regex makes the pattern case-insensitive, matching both e and E.
*/

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

/* 1.1
To ensure the character e only appears between two digits in a number input, you can use a regular expression pattern.
Number inputs only allow the e to occur between two digits. 
To match any number, you can use the character class [0-9]. 
This will match any digit between 0 and 9.
*/
// Example 
const regex3 = /[0-9]e[0-9]/i;

/* 1.2
The + modifier in a regex allows you to match a pattern that occurs one or more times. 
To match your digit pattern one or more times, add a plus after each of the digit character classes. 
For example: [0-9]+.
*/
// Example
const regex4 = /[0-9]+e[0-9]+/i;

// SHORTHAND CHARACTER CLASS(represents any digit in a Regex pattern)
// \d

