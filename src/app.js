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
  let title = document.querySelector(".title");
  let emoji = ["♦", "♣", "♥", "♠"];
  let number = [
    "1",
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
  let randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
  let randomNumber = number[Math.floor(Math.random() * number.length)];

  if (randomEmoji === "♦") {
    style.color = "red";
    title.innerHTML = "Dimond";
  } else if (randomEmoji === "♣") {
    style.color = "black";
    title.innerHTML = "Club";
  } else if (randomEmoji === "♥") {
    style.color = "red";
    title.innerHTML = "Heart";
  } else (randomEmoji === "♠") {
    style.color = "black";
    title.innerHTML = "Spade";
  }

  document.querySelector(".emoji").innerHTML = randomEmoji;
};
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
