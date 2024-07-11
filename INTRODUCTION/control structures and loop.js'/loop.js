// Syntax
for ("iterator"; "condition"; "iteration") {

}

// iterator is the variable that the loops acts on you set to be 0
// condition is set if true continue if false stops
// iteration updates the variable


for (let i = 0; i < 3; i = i + 1) {
    console.log(i);
}


const rows = ["nathan","Praise","Samad"];

for (let i = 0; i < 3; i = i + 1) {
    console.log(rows[i]);
}

// WHILE LOOP
/*
It runs till the condition specified is no longer true
*/
// SYNTAX
while (condition) {
    logic;
  }

// Example 1
let continueLoop = true;

 while (continueLoop) { /* If continueLoop is true loop runs forever(infinite loop) */
    console.log("Hello");
}

continueLoop = true;
while (continueLoop) {
    console.log("Hello");
    continueLoop = false; /* This stops the loop*/
}

// Example 2
count = 8;
index = 0;

while (continueLoop) {
    index++;
    console.log(index)
    if (index === count) {
        continueLoop = false;
    }
}

// DO while LOOP
do {
    logic;
}
while(condition);
/*
do-while loop:
Similar to a while loop, but guarantees at least one execution of the block of code.
*/
// Example
let x = 0;

do {
    console.log("x: " + x);
    x++;
} while (x < 3);

// Break statement

