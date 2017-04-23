'use strict';
/* eslint linebreak-style: ["error", "windows"] */
/* global $ */
$(document).ready(init);
let guess = 0;
let gamesCount=0;
let wonCount=0;
function init() {
    console.log('init');
    $('#CoinDiv').css('background-image', 'url(question.jpg)');
    $('#WinOrLoose').hide();

    $('#guess').change(onGuessed);
    $('#flipButton').click(onClicked);
    loadStatistics();

}
function loadStatistics(){
    let ratio=0;
    $('#statistics ul').empty();
    $('#statistics ul').append($('<li>').text('Games: '+gamesCount));
    $('#statistics ul').append($('<li>').text('Won: '+wonCount));
    $('#statistics ul').append($('<li>').text('Lost: '+(gamesCount-wonCount)));
    if(gamesCount!=0){
        ratio= Math.floor(wonCount/gamesCount * 100);
    }
    $('#statistics ul').append($('<li>').text('Winning ration: '+ratio+'%'));
    
}

function onGuessed(e) {
    console.log('onGuessed');
    let input = $(e.target).children(':selected').val();
    if (input == 'def') {
        alertForSelect();
    } else {
        guess = parseInt(input);
    }
}
function alertForSelect() {
    console.log('alertForSelect');
    alert('Choose Heads or Tails first!');
    guess = 0;
}

function onClicked(e) {
    console.log('onClicked');
    if (guess == 0) {
        alertForSelect();
    } else {
        let coinSide = Math.floor(Math.random() * 2) + 1;
        console.log(coinSide);
        gamesCount++;
        $('#CoinDiv').css('background-image', 'url('+coinSide+'.jpg)');

        $('#WinOrLoose').show();
        if (coinSide == guess) {
            $('#WinOrLoose h1').text('You Won!');
            wonCount++;
            
        } else {
            $('#WinOrLoose h1').text('You Lost!');
        }
        loadStatistics();
    }

}