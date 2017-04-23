'use strict';
/* eslint linebreak-style: ["error", "windows"] */
let randomNumber;
for (let i=0; i<2; i++) {
    randomNumber='';
    for (let j=0; j<7; j++) {
        randomNumber+=' '+Math.floor(Math.random()*39+1);
    }
    console.log(randomNumber);
}
