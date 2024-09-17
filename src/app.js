import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  addEventListener("click", function() {
    generateCard();
  });
};
//console.log("Hello Rigo from the console!");
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
  document.querySelector(".card").innerHTML = number[number];
  const randomSuit = document.querySelectorAll("#topright, #bottomleft");

  randomSuit.forEach(randomSuit => {
    randomSuit.innerHTML = suit[suit];
    if (suit[suit] === "♥" || suit[suit] === "♦") {
      suit.style.color = "red";
    } else {
      randomSuit.style.color = "black";
    }
  });

  const randomCard = document.querySelector(".card");
  if (suit[suit] === "♥" || suit[suit] === "♦") {
    randomCard.style.color = "red";
  } else {
    randomCard.style.color = "black";
  }
};
