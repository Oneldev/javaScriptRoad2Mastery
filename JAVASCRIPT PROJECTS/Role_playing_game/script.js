let xp = 0;
let health = 100;
let gold = 250;
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
You use reference and not call, because it calls the function if you function call at the loading of the page
In this example, button is the button element, and myFunction is a reference to a function. When the button is clicked, myFunction will be called.
*/
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
// Now this assign the function to the button, whenever the 
// user clicks the button the funtion runs


// 
/* creating a location array to hold different locations like,
store and the cave and the town square.
Each Location will be represented as an object
*/
// Objects (Object.js)
const weapons = [
  {
    name: "stick",
    power: 5

  },
  {
    name: "dagger",
    power: 30
  },
  {
    name: "claw hammer",
    power: 50
  },
  {
    name: "sword",
    power: 100
  }
];
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15
  },
  {
    name: "beast",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
  }
]
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
      {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
      },
      {
        name: "fight",
        "button text": ["Attack","Dodge","Run"],
        "button functions": [attack,dodge,goTown],
        text: "You are fighting a monster."
        
      },
      {
        name: "kill monster",
        "button text": ["Go to town square","Go to town square","Go to town square"],
        "button functions": [goTown,goTown,easterEgg],
        text: "The monster screams Arg! as it dies. You gain experience points and find gold."
        
      },
      {
        name: "lose",
        "button text": ["REPLAY?","REPLAY?","REPLAY?"],
        "button functions": [restart,restart,restart],
        text: "You die. &#x2620"
        //  &#x2620 is an HTML entity code that represents a skull and crossbones symbol (☠️)
        // htmlEntity.js
        },
        {
          name: "win",
          "button text": ["REPLAY?","REPLAY?","REPLAY?"],
          "button functions": [restart,restart,restart],
          text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
          
        },
        {
          name: "easter egg",
          "button text": ["2","8","Go to town"],
          "button functions": [pickTwo,pickEight,goTown],
          text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
          
        }
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
    update(locations[0]);
    // This paass in the First object in the array
  }
function goStore () {
    update(locations[1]);
}
function goCave () {
    update(locations[2]);
}

function buyHealth (){
  // we giviving a functionality to the buy health function
 /*gold = gold - 10;
 health = health + 10;*/
 // using the compound assigment(a way of combining two actions(operation and assignment));
 if (gold >= 10) {
  gold -= 10;
  health += 10;
  goldText.innerText = gold;
  healthText.innerText = health;
} else {
  text.innerText = "You do not have enough gold to buy health.";
}
}

  function buyWeapon() {
    if (currentWeaponIndex < weapons.length)
    //this balance it because it is counting from zero
     {
      if (gold >= 30) {
        gold -= 30;
        currentWeaponIndex++;
        goldText.innerText = gold;
        let newWeapon = weapons[currentWeaponIndex].name;
        text.innerText = "You now have a " + newWeapon + ".";
        inventory.push(newWeapon);
        // This adds this stings to the back of the text
        text.innerText += " In your inventory you have: " + inventory;
      }
      else {
        text.innerText = "You do not have enough gold to buy a weapon."
      }
    } else {
        text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }
  }
  function sellWeapon() {
    if (inventory.length > 1) {
      gold += 15;
      goldText.innerText = gold;
      let currentWeapon = inventory.shift();
      text.innerText = "You sold a " + currentWeapon + ".";
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "Don't sell your only weapon!";
    }
  }
function fightSlime () {
 fighting = 0;
 goFight();
}
function fightBeast () {
  fighting = 1;
  goFight();
}
function fightDragon() {
  fighting = 2;
 goFight();
}
function goFight () {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  // (DOM.js)
  monsterStats.style.display = 'block';
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}



function attack() {
  // This get displayed on the Text screen once the attack function is clicked
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);// Monster attack is based on monsters level and players xp
  if (isMonsterHit()) {
      // math.js
    monsterHealth -=  weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1; // Value changes depending on your xp and power of the weapon
  }  else {
    text.innerText += " You miss.";
  }
  // math.js
  /* In the above the Hit(Damage on the monsterhealth) is valid if the random number generated is more than 0.2 
  also if the players health is low it accepts any math.randomnumber generated to increase the games fairness
  If the attacks hit the monsters health is reduced based on the power of the current weapon and there is also a random bonus based on the players experience points*/
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if(monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  if(Math.random() <= .1 && inventory.length !== 1 ) {
    //if condition met weapon breaks and get removed from the top variable(inventory)
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeaponIndex--;
    

  }
}
function getMonsterAttackValue (level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));//stopped
  // tenaryOperator.js
  return hit > 0 ? hit : 0; 
}
function isMonsterHit() {
  // Logical Operators
  return Math.random() > .2 || health < 20;
}
function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}
function defeatMonster() {
gold += Math.floor(monsters[fighting].level * 6.7);
xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);

}
function lose() {
  update(locations[5]);
}
function winGame() {
  update(locations[6]);
}
function restart() {
xp = 0;
health = 100;
gold = 50;
currentWeaponIndex = 0;
inventory = ["stick"];
goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}
function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
pick(2);
}
function pickEight() {
pick(8);
}
function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11)); // random numberd between 0 and 10
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!"
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
  } if (health <=0) {
    lose();
  }
}