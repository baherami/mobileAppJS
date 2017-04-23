/* eslint */
/* eslint linebreak-style: ["error", "windows"]*/
/* global $ */
let keyboardLog='';
let word='hi';
$(document).ready(init);
function init() {
    $(document).keyup(registerKey);
}
function registerKey(e){
    let c=String.fromCharCode(e.which);
    keyboardLog+=c;
    if(keyboardLog.length==2){
        if((keyboardLog==word)||(keyboardLog==word.toUpperCase())) {
            console.log('hi');
            $('#greeting').html('<p>Hello!</p>');
            keyboardLog='';
        }else{
            keyboardLog=c;
        }
    }
}