// Function to calculate average
// Some mistakes you can make and things to consider
/*let scores = [];
let sum;
let average;
function getAverage(scores) {
 let average = sum/scores.length
 return average;
}
for(let i = 0; i <= scores.length; i++) {
  sum += scores[i];
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
*/

// OUTPUT :
/* NAN
 NAN
*/

// PROBLEM 
/*
sum is not correctly innitialise, suppose to set sum to zero 
the loop condition is incorrect because of the less than equal to sign, 
Variables should be initialized inside the function to avoid conflicts and ensure correct results for each call.
The problem lies in the variable sum. It is declared outside the getAverage function and not reset to 0 between function calls. This causes the sum from the first call to be carried over to the second call, leading to an incorrect result.
*/

// CORRECT CODE
let scores = [];

function getAverage(scores) {
    let sum;
    let total = scores.length;
    let average;
    for (let i = 0; i < total; i++) {
        sum += scores[i];
    }
    average = sum / total;
    return average;
}


console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
