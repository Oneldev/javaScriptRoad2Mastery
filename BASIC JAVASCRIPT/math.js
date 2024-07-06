/* Now the first question to mind is what is Math.object
Think of JavaScript as a big toolbox full of tools. 
One of the tools in this toolbox is called Math. 
This Math tool comes with a bunch of useful functions and properties that help you perform mathematical operations easily.

The math is an inbuilt object.
1. Math.random():

Generates a random number between 0 (inclusive) and 1 (exclusive).
Example: It might generate numbers like 0.234, 0.678, etc.

2. Math.floor():

Rounds a number down to the nearest whole number.
Example: Math.floor(4.9) becomes 4.

3. Generating a Random Number in a Range:

To generate a random number between 1 and 5, you use Math.random() multiplied by 5 and then add 1.
Example: Math.floor(Math.random() * 5) + 1.
Visual Illustration
Generating a Random Number between 1 and 5
scss
Copy code
Math.random() * 5       Math.floor()       + 1
   |                        |              |
0.678 (example) * 5 = 3.39 -> 3 (rounded down) -> 3 + 
*/


//NOTE
/*
 the properties in javascript are static can be used directly

 Comparison with Instance Properties
Imagine you have a class Car. If you want to use the properties of a Car, you typically need to create an instance of the Car.

javascript
Copy code
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    display() {
        console.log(`Car: ${this.make} ${this.model}`);
    }
}

let myCar = new Car('Toyota', 'Corolla');
myCar.display();  // Prints "Car: Toyota Corolla"
In the case of Math, you don't need to do this. Math is like a special utility toolbox that doesn't require creating an instance.

Visual Aid
Instance Properties
scss
Copy code
Car class
   ├── make
   ├── model
   └── display()
       └── Needs an instance to use

Example:
let myCar = new Car('Toyota', 'Corolla');
myCar.display();  // Uses instance myCar
Static Properties
scss
Copy code
Math object
   ├── random()
   ├── floor()
   └── max()
       └── No instance needed to use

Example:
Math.random();  // Directly uses Math object
Why Static?
Static properties and methods are called "static" because:

They are fixed and belong directly to the class or object itself, not to individual instances.
They can be accessed and used without creating an instance of the class or object.
*/
