// MULTIDIMENSIONAL ARRAY
/*
In JavaScript, multidimensional arrays are typically arrays of arrays, where each element in the main array is itself an array.
*/
// Example of a Multidimensional Array in JavaScript:
// Creating a 2D array (3x3)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][2]); // Output: 6
console.log(matrix[2][1]); // Output: 8

/*
In this example:

matrix is a 2D array where each element (matrix[0], matrix[1], matrix[2]) is an array itself.
Accessing elements in a 2D array is done using two indices: the first for the outer array (row index) and the second for the inner array (column index).
*/

//Creating and Working with Multidimensional Arrays:
/*
1. Initialization:

You can initialize multidimensional arrays directly as shown in the example above, or you can initialize an array and populate it with arrays later.
*/
// Example
let matrix1 = [];
matrix1[0] = [1, 2, 3];
matrix1[1] = [4, 5, 6];
matrix1[2] = [7, 8, 9];
/*
2. Accessing Elements:

Use nested square brackets to access elements in a multidimensional array.
*/
// Example
console.log(matrix1[1][1]); // Output: 5 (accessing the element at row 1, column 1)

/*
Iterating through a Multidimensional Array:

Use nested loops to iterate through each element in the array.
*/
// Example
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// Example: Calculating the Sum of a Multidimensional Array

let matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let sum = 0;
for (let i = 0; i < matrix2.length; i++) {
    for (let j = 0; j < matrix2[i].length; j++) {
        // Add the current element (matrix[i][j]) to the sum
        sum += matrix[i][j];
    }
}
console.log("Sum of all elements: " + sum);

