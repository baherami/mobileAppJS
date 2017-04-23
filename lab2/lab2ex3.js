'use strict';
/* eslint linebreak-style: ["error", "windows"] */
/* global $ */

$(document).ready(init);

function init() {
    console.log('init');
         $('#fdiv').append('<p id="message"></p>');
         $('#sdiv').hover(showLinkHint, hideLinkHint);
}
function showLinkHint() {
    console.log('showLinkHint');
    $('#message').text('About to select a link ...');
}
function hideLinkHint() {
    console.log('hideLinkHint');
    $('#message').text('');
}

