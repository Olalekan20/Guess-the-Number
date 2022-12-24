'use strict';

// console.log(document.querySelector('.message').textContent);

const SecretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
