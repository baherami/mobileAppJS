'use strict';
/* eslint linebreak-style: ["error", "windows"] */
/* global $ */

$(document).ready(init);

function init() {
    console.log('init');
    $('button').click(addParagraph);
}

function addParagraph(){
    console.log('addParagraph');
    if($('#tp').length==0) {
            $('#fdiv').append('<p id="tp">Hello user</p>');
    }
}