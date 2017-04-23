'use strict';
/* eslint linebreak-style: ["error", "windows"] */

let numberOfRows = prompt('Give me a number');
let prettyPrint;
let rowOfNumbers;
if (isNaN(numberOfRows)) {
    alert('Please enter a valid Number');
} else {
    for (let i = 0; i < numberOfRows; i++) {
        rowOfNumbers = getRandomNumbers();
        prettyPrint = i + 1;
        prettyPrint += '.row:' + rowOfNumbers[0]+',';
        for (let j = 1; j < rowOfNumbers.length - 1; j++) {
            prettyPrint += rowOfNumbers[j] + ',';
        }
        prettyPrint = prettyPrint.slice(0, prettyPrint.length - 1);
        prettyPrint += ' and ' + rowOfNumbers[rowOfNumbers.length - 1];
        console.log(prettyPrint);
    }
}


function getRandomNumbers() {
    let randomNumbers = [];
    let isUnique = false;
    let randomNumber;
    for (let j = 0; j < 7; j++) {
        isUnique = false;
        while (!isUnique) {
            randomNumber = Math.floor(Math.random() * 39 + 1);
            isUnique = true;
            randomNumbers.forEach(function(k) {
                if (randomNumber == k) {
                    isUnique = false;
                }
            });
        }
        randomNumbers[j] = randomNumber;

    }
    randomNumbers.sort(function (a, b) {
        return a - b;
    });
    return randomNumbers;
}
