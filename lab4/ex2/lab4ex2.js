/* eslint*/
/* eslint linebreak-style: ["error", "windows"]*/
/* global $ */
$(document).ready(init);
function init() {
    console.log('init');
    if (!localStorage.getItem('hits')) {
        localStorage.setItem('hits', '0');
    }
    if (!localStorage.getItem('history')) {
        localStorage.setItem('history', ' never before!');
    }
    let h = parseInt(localStorage.getItem('hits')) + 1;
    localStorage.setItem('hits', h);
    $('#timebutton').click(makeTimeStamp);
    $('#history').append('Page was last accessed on: ' +
        localStorage.getItem('history'));
    let v = localStorage.getItem('hits');
    let ending = parseInt(v) == 1 ? ' time.' : ' times.';
    $('#hits').append('Page has been visited: ' + v + ending);
}
function makeTimeStamp() {
    console.log('makeTimeStamp');
    localStorage.setItem('history', Date());
}


