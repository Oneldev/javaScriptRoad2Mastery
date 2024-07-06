let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

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

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        // Note we dont use function call when assigning function 
        // to properties or Events.
        text: "You are in the town square. You see a sign that says \"Store\"."
      },
      {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
      },
];
/* We then create a function to handle the gotoscore and gototownsquare event(More flexible) */
function update(location) /* Note the parameter gives a function access to a variable*/  {
    // you want to change the text of the button when the function is runned
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
    // The below would change the text section to You enter the store when the go to store button
    // is clicked
    text.innerHTML = location.text; /*DOM.js*/
    // Note to create a text with quote inside a string, you use  backslash(\)
}


function goTown () {
 update(locations[0]);
  }
  function goStore () {
  update(locations[1]);
}
function goCave () {

}
function fightDragon () {
    console.log("Fighting dragon.");
}
function buyHealth (){

}
function buyWeapon () {

}
