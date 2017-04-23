/* eslint */
/* eslint linebreak-style: ["error", "windows"]*/
let temperature = [4, 3, 2, 1, 0, -1, -2, -2, -2, -1, 0,
    2, 4, 6, 7, 6, 5, 5, 5, 4.5, 4, 3];
let faultytemperature = ['4s', null, 3, 2, 1, 0, -1, -2, null, -2,
    -12, -1, 'no record', 2, 4, -1 / 0, 6, 7, 6, , 5, 5, 5, 4.5, 4, 3];
let f={temp: -2};

function minOfArray(array) {
    let minTemp;
    let minimumIsSet = false;
    let i = 0;
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

console.log('first measurements, minimum is ' + minOfArray(temperature));
console.log('second measurements(with faulty inputs),minimum is '
    + minOfArray(faultytemperature));
console.log('third measurements, minimum is ' + minOfArray(f));

document.getElementById('result').innerHTML =
    '<b>first measurements, minimum is :' + minOfArray(temperature) + '</b>'+
    '<br><b>second measurements(with faulty inputs), minimum is :' +
    minOfArray(faultytemperature) + '</b>'+
    '<br><b>third measurements, minimum is ' + minOfArray(f);
