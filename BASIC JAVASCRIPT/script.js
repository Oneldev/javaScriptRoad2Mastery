let button = document.querySelector("button");
let button2 = document.querySelector("#info"); 


button.onclick = changeText;
button2.onclick = changeText;

function changeText() {
    button.innerText = "samad";
    button2.innerText = "Hello World"; 
}