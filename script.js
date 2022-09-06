'use strict';

/*
document.querySelector('.message').textContent = 'Correct Number!';

//Selecting class elements and changing text:
document.querySelector('.score').textContent = 19;
document.querySelector('.number').textContent = 13;

//Getting value of input field:
document.querySelector('.guess').value;
document.querySelector('.guess').value = 23;
*/

//generate random number.

const getRandomNumber = function () {
  return Math.floor(Math.random() * 100);
};

//Secret number generator
let secretNumber = getRandomNumber();
console.log(secretNumber);

//Track score
let score = 20;

//Track highscore
let highscore = 0;

//Event listener

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //No input entered
  if (!guess) {
    document.querySelector('.message').textContent = 'No number entered!';
  } else if (score > 0) {
    if (guess < secretNumber) {
      document.querySelector('.message').textContent = `Higher than ${guess}`;
      score -= 1;
      //guess too high
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = `Lower than ${guess}`;
      score -= 1;
      //guess is correct
    } else if (guess === secretNumber) {
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      document.querySelector(
        '.message'
      ).textContent = `${guess} is the correct answer!`;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60B347';
      document.querySelector('.number').style.width = '30rem';
    }
    if (score === 0) {
      document.querySelector('.message').textContent =
        'You have ran out of guesses. You lose.';
    }
  } else if (score === 0) {
    document.querySelector('.message').textContent =
      'You\'ve lost. Press "Again!" to play again';
  }

  //update score:
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.backgroundColor = '#eee';
  document.querySelector('.message').textContent =
    'Game reset. Start Guessing!';
  document.querySelector('.guess').value = '';
  secretNumber = getRandomNumber();
  console.log(secretNumber);
});
