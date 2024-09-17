import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  let items = ["♦", "♥", "♠", "♣"];
  let values = [
    "A",
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
    "K"
  ];
  function getItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const generateCard = () => {
    const createdItem = getItem(items);
    const createdValue = getItem(values);

    const color = createdItem === "♦" || createdItem === "♥" ? "red" : "black";

    document.getElementById("item").style.color = color;
    document.getElementById("itemInvert").style.color = color;
    document.getElementById("item").innerHTML = createdItem;
    document.getElementById("itemInvert").innerHTML = createdItem;
    document.getElementById("value").innerHTML = createdValue;
  };

  addEventListener("click", function() {
    generateCard();
  });
};
