"use strict";

// console.log(document.querySelector('.message').textContent);

const SecretNumber = Math.trunc(math.random() * 20 + 1);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  }
});
