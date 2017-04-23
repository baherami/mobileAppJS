/* eslint */
/* eslint linebreak-style: ["error", "windows"]*/
/* global $ */
let keyboardLog = '';
let word = 'hi';
let d, t = 0;
let distanceMsg = 'Between 1 to 10000';
let timeMsg = 'Between 0.016666 to 24';

$(document).ready(init);
function setUpInputD() {
    let inputD = $('[name="distance"]');
    inputD.css('color', 'grey');
    inputD.val(distanceMsg);
    inputD.keydown(function (e) {
        if (inputD.val() == distanceMsg) {
            inputD.val('');
            inputD.css('color', 'black');
        }
    });
    inputD.change(function (e) {
        d = parseFloat(inputD.val());
        console.log(d);
        if (isNaN(d) || d > 10000 || d < 1) {
            inputD.css('color', 'red');
            inputD.val(distanceMsg);
            inputD.focus();
        } else {
            inputD.val(d + '');
            calculateSpeed();
        }
    });

}
function setUpInputT() {

    let inputT = $('[name="time"]');
    inputT.css('color', 'grey');
    inputT.val(timeMsg);
    inputT.keydown(function (e) {
        if (inputT.val() == timeMsg) {
            inputT.val('');
            inputT.css('color', 'black');
        }
    });
    inputT.change(function (e) {

        t = parseFloat(inputT.val());
        console.log(t);
        if (isNaN(t) || t > 24 || t < 0.016666) {
            inputT.css('color', 'red');
            inputT.val(timeMsg);
            inputT.focus();
        } else {
            inputT.val(t + '');
            calculateSpeed();
        }
    });

}
function init() {
    setUpInputD();
    setUpInputT();

}
function calculateSpeed() {
    if (d * t != 0) {
        console.log(d / t);
        $('#result').html('<b>Average Speed :' + (d / t) + 'km/h </b>');

    }
}
function registerKey(e) {
    let c = String.fromCharCode(e.which);
    keyboardLog += c;
    if (keyboardLog.length == 2) {
        if ((keyboardLog == word) || (keyboardLog == word.toUpperCase())) {
            console.log('hi');
            $('#greeting').html('<p>Hello!</p>');
            keyboardLog = '';
        } else {
            keyboardLog = c;
        }
    }
}