const numbers = [1,2,3];
console.log(numbers);

/* UNSHIFT (opposite of PUSH)
It adds to the beginnng of the array, also returns the new length of the array.
*/
// Example 1
const unshiftEXample = [2, 1, 0];
const theNewLength = countDown.unshift(8);
console.log(countDown); // [6, 2, 1, 0]
console.log(newLength); // 4

// Example 2
const unshifted = numbers.unshift(5);
console.log(unshifted); // 4

/* SHIFT (opposite of POP)
It removes from the beginnng of the array, also returns the number of element returned when assigned to variable.
*/
let shifted = numbers.shift();
console.log(shifted);