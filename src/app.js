/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
btn.addEventListener("click", function() {
generateCard(HIT!);
});
};
console.log("Hello Rigo from the console!");
const generateCard = () => {
  let suit = ["♦", "♣", "♥", "♠"];
  let number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let randomCardSuit = suit[Math.floor(Math.random() * suit.length)];
  let randomNumber = number[Math.floor(Math.random() * number.length)];

  document.querySelector(".randomCardValue").innerHTML = number[number];
  //const randomCardSuit = document.querySelectorAll("#topright, #bottomleft");
//♦
//♣
//♥
//♠
//1.) make work as deck 
//2.) use suits instead of number 
//3.)animate switching between cards 
//1.) have button generate the new card 
//2.)the color of the number needs to match the suit (red and black) 
//3.) make it pretty