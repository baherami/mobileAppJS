'use strict';
/* eslint linebreak-style: ["error", "windows"] */
/* global $ */
$(document).ready(init);
const imgName = ['red', 'blue', 'yellow'];
const advText = 'select your favourite colour among the colours';
const sel = 'your favourite colours in order';

function init() {
    console.log('init');
    $('button').click(activate);
    $('button').prop('disabled', false);
}

function activate() {
    console.log('activate');
    $('button').off();
    $('button').prop('disabled', true);
    for (let i = 1; i < imgName.length + 1; i++) {
        console.log(imgName[i - 1]);
        if (!$('#img' + i).is(':visible')) {
            $('#img' + i).show();
        } else {
            $('#img' + i).attr('src', imgName[i - 1] + '.jpg');
            $('#img' + i).attr('alt', imgName[i - 1]);
            $('#img' + i).click(imgClicked);
        }
    }
    $('#advice').text(advText);
    $('#sel').text(sel);
    $('#selection ul').remove();
    $('#selection').append('<ul>');
}

function imgClicked(e) {
    console.log('imclicked');
    let clickedItem = e.target;
    $(clickedItem).hide();
    $('#selection ul').append($('<li>').text(clickedItem.alt));
    if ($('#selection ul li').length == imgName.length) {
        init();
    }
}
