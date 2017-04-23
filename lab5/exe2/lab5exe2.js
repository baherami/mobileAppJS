/* eslint */
/* eslint linebreak-style: ["error", "windows"]*/
let temperature=[4,3,2,1,0,-1,-2,-2,-2,-1,0,2,4,6,7,6,5,5,5,4.5,4,3];
let minTemp=500;
for (let i=0;i<temperature.length;i++){
    if(temperature[i]<minTemp){
        minTemp=temperature[i];
    }
}
console.log(minTemp);
document.getElementById('result').innerHTML='<b>Minimum:'+minTemp+'</b>';
