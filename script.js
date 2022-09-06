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

//Event listener

const secretNumber = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const score = Number(document.querySelector('.score').textContent);
  console.log(score);

  //No input entered
  if (!guess) {
    document.querySelector('.message').textContent = 'No number entered!';
    //guess too low
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = `Higher than ${guess}`;
    //guess too high
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = `Lower than ${guess}`;
  } else if (guess === secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `${guess} is the correct answer! Your score is: ${score}`;
  }
});
