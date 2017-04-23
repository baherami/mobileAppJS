/* eslint*/
/* eslint linebreak-style: ["error", "windows"]*/
/* global $ */
const someString = ['a', 'as', 'bis', 'c', 'ciss', 'def', 'sin', 'tan'];
const regexp = /s/g;
$(document).ready(init);
function init() {
    console.log('init');
    $('#labresource').append('<h2>Array:' +
     JSON.stringify(someString) + '</h2>');
    let n = calculateIt();
    $('#labresults').append('<h2>Amount of  s chars: ' + n + '</h2>');
}
function calculateIt() {
    console.log('runTheApp');
    let sum = 0;
    for (let x = 0; x < someString.length; x++) {
        sum += (someString[x].match(regexp) || []).length;
    }
    return sum;
}


