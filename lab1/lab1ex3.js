'use strict';
/* eslint linebreak-style: ["error", "windows"] */

let numberOfRows = prompt('Give me a number');
if (isNaN(numberOfRows)) {
    alert('Please enter a valid Number');
} else {
    for (let i = 0; i < numberOfRows; i++) {
        console.log(getRandomNumbers());
    }
}


function getRandomNumbers() {
    let randomNumbers = '';
    for (let j = 0; j < 7; j++) {
        randomNumbers += ' ' + Math.floor(Math.random() * 39 + 1);
    }
    return randomNumbers;
}
