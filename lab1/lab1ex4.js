'use strict';
/* eslint linebreak-style: ["error", "windows"] */

let numberOfRows = prompt('Give me a number');
let prettyPrint;
if (isNaN(numberOfRows)) {
    alert('Please enter a valid Number');
} else {
    for (let i = 0; i < numberOfRows; i++) {
        prettyPrint = '';
        getRandomNumbers().forEach(function(j) {
            prettyPrint += j + ',';
        });
        prettyPrint = prettyPrint.slice(0, prettyPrint.length - 1);
        console.log(prettyPrint);
    }
}


function getRandomNumbers() {
    let randomNumbers = [];
    for (let j = 0; j < 7; j++) {
        randomNumbers[j] = Math.floor(Math.random() * 39 + 1);
    }
    randomNumbers.sort(function(a, b) {
        return a - b;
    });
    return randomNumbers;
}
