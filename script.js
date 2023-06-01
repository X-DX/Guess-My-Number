'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '😜 Correct Number !';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 50;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


// hide number
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    // when no input
    if (!guess) {
        //document.querySelector('.message').textContent = '😂 NO Number';
        displayMessage('😂 NO Number');
    }
    // when players wins
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉🎉 Correct Number !';
        displayMessage('🎉🎉 Correct Number !');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '40rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // when guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? '🎢 Too High' : '🎢 Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            // document.querySelector('.message').textContent = 'You Lose the Game 😭😭';
            displayMessage('You Lose the Game 😭😭');
            document.querySelector('.score').textContent = 0;
        }
    }
    // when guess is too high 
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '🎢 Too High';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You Lose the Game 😭😭';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // // when guess is too low
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '🎢 Too Low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You Lose the Game 😭😭';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});
// reset button / Play Again
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    let secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start Guessing.....';
    displayMessage('Start Guessing..... 🤔🤔');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#8596e4';
    document.querySelector('.number').style.width = '15rem';
});
