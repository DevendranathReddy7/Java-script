"use strict";
console.log(document.querySelector(".message").textContent);

const number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Enter a number";
  } else if (score === 0) {
    document.querySelector(".message").textContent = "you lost";
  } else if (guess > number) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "too high!";
  } else if (guess < number) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "too low!";
  } else if (guess === number) {
    highScore = score > highScore ? score : highScore;
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".message").textContent = "you win!";
    document.querySelector(".highscore").textContent = highScore;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start Guessing...";
});
