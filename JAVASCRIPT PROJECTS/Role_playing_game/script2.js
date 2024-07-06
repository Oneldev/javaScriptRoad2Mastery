
let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

// DOM
const button1 = document.querySelector("#button1");
// it is best practice to use the const keyword to declare it instead of the let keyword. This will tell JavaScript to throw an error if you accidentally reassign it.
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// initialize buttons( setting a default state)
// Accessing HTML properties using dot notation(allows you to access properties and methods in javascript)
/* 
Here is an example of using dot notation to set the onclick property of a button to a function reference.

Example Code
button.onclick = myFunction;
In this example, button is the button element, and myFunction is a reference to a function. When the button is clicked, myFunction will be called.
*/
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
// Now this assign the function to the button, whenever the 
// user clicks the button the funtion runs


// function update(location) {

// }
// /* creating a location array to hold different locations like,
// store and the cave and the town square.
// Each Location will be represented as an object
// */
// // Objects (Object.js)
// const locations = [
//     {
//         name: "town square",
//         "button text": ["Go to store","Go to cave", "Fight dragon"],
//         "button functions": [goStore,goCave, fightDragon]
//     }
// ];






// CREATING INTERACTIONS
// USING THE INNERTEXT
/*
The innerText property controls the text that appears in an HTML element. For example:

Example Code
<p id="info">Demo content</p> 
Example Code
const info = document.querySelector("#info"); 
info.innerText = "Hello World"; 
The following example would change the text of the p element from Demo content to Hello World.
*/
function goTown () {
    // you want to change the text of the button when the function is runned
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
  
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    // The below would change the text section to You enter the store when the go to store button
    // is clicked
    text.innerText = "You are in the town square. You see a sign that says \"Store \".";
    // Note to create a text with quote inside a string, you use  backslash(\)
  }
function goStore () {
    // you want to change the text of the button when the function is runned
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";

    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    // The below would change the text section to You enter the store when the go to store button
    // is clicked
    text.innerText = "You enter the store.";
}


function fightDragon () {
    console.log("Fighting dragon.");
}


function buyHealth (){

}
function buyWeapon () {

}


