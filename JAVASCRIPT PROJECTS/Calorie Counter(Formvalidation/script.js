const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;
// is has.js

function cleanInputString (str) {

 const regex = /[+-\s]/g;
 return str.replace(regex, '');
 //backslash to escape the +,
// regularEx[ressions].js
/*
The function cleanInputString removes all +, -, and spaces from a string.
The function will use a regex to find and replace +, -, and spaces with an empty string.
*/
} 
function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
    // regularEx[pressions].js
    /*
When you use console.log(isInvalidInput("1e3"));, the console shows:
it shows - [ '1e3', index: 0, input: '1e3', groups: undefined ]
1.(Matched value) - "1e3"
2. Index: 0(where "1e3" starts in the string)
3. input: '1e3 (Original string) - "1e3"
4. Matched groups: Not used here.
This tells you what part of the string matched the pattern you're looking for.
/*
This function checks if a string contains the pattern where a single digit is followed by the letter 'e' and then another single digit.
*/  
}

function addEntry () {
  
}
// This function allows user adds entries to the calorie counter


