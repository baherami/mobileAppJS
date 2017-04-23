'use strict';
/* eslint linebreak-style: ["error", "windows"] */
/* global $ */

$(document).ready(init);

function init() {
    console.log('init');
    $('p:last').attr('id','sp');
    $('#fp').remove();
    $('#fdiv').css('background-color','grey');
    $('#fdiv').css('color','white');
}