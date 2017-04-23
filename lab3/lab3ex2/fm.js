'use strict';
/* eslint linebreak-style: ["error", "windows"] */
/* global $ */
$(document).ready(init);
let infoArray = [4];
const meansOfTransport =['By bus', 'By train', 'On foot'];

function init() {
    console.log('init');
    $('#ename').focusin(textFieldSelected);
    $('#ename').focusout(textFieldUnSelected);
    $('#lname').focusin(textFieldSelected);
    $('#lname').focusout(textFieldUnSelected);
    $('#selSex').change(selectChanged);
}
function textFieldSelected(e) {
    console.log('textFieldSelected');
    let selectedField = e.target;
    $(selectedField).css('background-color', 'LightGray');
}
function textFieldUnSelected(e) {
    console.log('textFieldUnSelected');
    let targetField = e.target;
    $(targetField).css('background-color', 'White');
    if (targetField.id == 'ename') {
        addToInfoArray(0, $(targetField).val());
    } else {
        addToInfoArray(1, $(targetField).val());
    }
}
function selectChanged(e) {
    console.log('selectChanged');
    let targetField = e.target;
    addToInfoArray(2, $(targetField).children(':selected').val());
}
function addToInfoArray(idx, value) {
    console.log('addToInfoArray');
    if (value != '') {
        infoArray[idx] = value;
    }else{
        infoArray[idx] = null;
    }
    if (infoArray[0] != null && infoArray[1] != null &&
        infoArray[2] != null && !$('#transport').is(':visible')) {
        createNewSelect();
    }
}

function createNewSelect() {
    let transportSelect=$('<select>');
    transportSelect.attr('id', 'transport');
    $('form').append(transportSelect);
    for(let i=0; i<meansOfTransport.length; i++) {
        let op=new Option(meansOfTransport[i], meansOfTransport[i].toLowerCase());
        $('#transport').append(op);
    }
    $('#transport').change(printOutResults);
}
function printOutResults(e) {
    let output='';
    addToInfoArray(3, $(e.target).children(':selected').val());
    for(let i=0; i<infoArray.length; i++) {
        output+=infoArray[i];
        if(i!=infoArray.length-1) {
            output+=',';
        }
    }
    $('#here').text(output);
}