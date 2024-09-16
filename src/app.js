/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {
//btn.addEventListener("click", function() {
//generatorCard(HIT!);
//});
//};
console.log("Hello Rigo from the console!");
const generatorCard = () => {
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
  let randomSuit = suit[Math.floor(Math.random() * suit.length)];
  let randomNumber = number[Math.floor(Math.random() * number.length)];

  document.querySelector(".randomCardValue").innerHTML = number[number];
  const randomSuit = document.querySelectorAll("#topright, #bottomleft");

  randomSuit.forEach(randomSuit => {
    randomSuit.innerHTML = suit[suit];
    if (suit[suit] === "♥" || suit[suit] === "♦") {
      cardSuit.style.color = "red";
    } else {
      randomSuit.style.color = "black";
    }
  });

  const randomCardValue = document.querySelector(".randomCardValue");
  if (suit[suit] === "♥" || suit[suit] === "♦") {
    randomCardValue.style.color = "red";
  } else {
    randomCardValue.style.color = "black";
  }

  console.log(suit[suit], numbers[number]);
};
//(document.querySelector().innerHTML = randomSuit), randomNumber;

//♦
//♣
//♥
//♠
//1.) make work as deck
//2.) use suits instead of number
//3.) animate switching between cards
//1.) have button generate the new card
//2.) the color of the number needs to match the suit (red and black)
//3.) make it pretty
