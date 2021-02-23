'use strict';

let secretNumber = Math.trunc(Math.random() * 20);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    // When guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('play again');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20);

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
