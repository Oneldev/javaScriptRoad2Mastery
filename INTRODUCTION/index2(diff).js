// MAJORLY HERE IS THE DIFFERENCE 
// Var = Function scoped
// Once you declare the variable anyway in a function it stays the same well
function exampleVar() {
    var x = 10;
    if (true) /* No condition set, so always evaluate to true */
     {
        var x = 20; // Same variable!
        console.log(x); // 20
    }
    console.log(x); // 20
}

exampleVar();

// Let = Block scoped
// variable only stays the same within a specific block
function exampleLet() {
    let x = 10;
    if (true) {
        let x = 20; // Different variable
        console.log(x); // 20
    }
    console.log(x); // 10
}

exampleLet();

// const = Cant be reused within a block, but different aside that block
function exampleConst() {
    const x = 10;
    if (true) {
        const x = 20; // Different variable
        console.log(x); // 20
    }
    console.log(x); // 10
}

