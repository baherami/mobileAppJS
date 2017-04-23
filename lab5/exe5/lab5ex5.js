/* eslint */
/* eslint linebreak-style: ["error", "windows"]*/
/* global $ */
let absURL='http://users.metropolia.fi/~aliba/mobilecourse/lab5/exe5/';
let jsonPath='temperatures.json';
$(document).ready(downloadJSON);
console.log('test');
function findTemp(week, city, data) {
    let tempArray;
    let minTemp;
    console.log('findTemp');
        console.log(data[week]);

    for(let prop in data[week]){
        console.log(data[week][prop].city);
        if(data[week][prop].city==city){
            tempArray=data[week][prop].temperatures;
            console.log(tempArray);
            break;
        }
    }
    minTemp=minOfArray(tempArray);
    console.log(minTemp);
    return minTemp;
}

function downloadJSON(){
    console.log('downloadJSON');
    let result=$('#results');

    $.ajax({
        url: absURL +jsonPath,
        success: function(data){
            let minT=findTemp('week9','Helsinki',data);
            console.log(minT);
            $('#test').html('<p>minimum is :'+minT+'</p>');

            result.append('minimum is '+minT);
        },
    });
}

function minOfArray(array) {
    let minTemp;
    let minimumIsSet = false;
    let i = 0;
     console.log('minArray');
    if(!Array.isArray(array)){
        return 'The Input is not an array';
    }
    while (!minimumIsSet) {
        if (array[i] != null && !isNaN(array[i])) {
            minTemp = array[i];
            break;
        }
        i++;
    }
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            continue;
        }

        if (array[i] != null && array[i] < minTemp) {
            minTemp = array[i];
        }
    }

    return minTemp;
}
