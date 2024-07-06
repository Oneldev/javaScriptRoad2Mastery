const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C"
    "#616A6B"
    "#4A235A"
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];

// Syntax ERROR
/*
Syntax errors are thrown when the JavaScript engine encounters something it can't interpret.
*/
function getRandomIndex() {
    console.log(darkColorsArr.length * math.random());
    const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex;
}
getRandomIndex();

// Reference ERROR
/*
 A ReferenceError is thrown when a non-existent variable is referenced. 
 */

 const body = document.queryselector("body");


 // TypeError
/*
 A TypeError means that the code is trying to perform an operation on a value that is not of the expected type. 
 */
// const myVariable = "Hello World";
// const myNumber = myVariable * 2;
// console.log(myNumber);

const bgHexCodeSpanElement = document.querySelector("bg-hex-code");

console.log(bgHexCodeSpanElement);
/*
Fix the document.querySelector("bg-hex-code") line so that it correctly selects the element with the id of bg-hex-code.
*/


