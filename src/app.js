import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function generarCarta(){

}





window.onload = function () {
    const suits = ["♦", "♥", "♠", "♣"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    document.getElementById("top-suit").textContent = randomSuit;
    document.getElementById("bottom-suit").textContent = randomSuit;
    document.getElementById("number").textContent = randomValue;

    const color = (randomSuit === "♥" || randomSuit === "♦") ? "red" : "black";

    document.getElementById("top-suit").style.color = color;
    document.getElementById("bottom-suit").style.color = color;
    document.getElementById("number").style.color = color;

   
};

