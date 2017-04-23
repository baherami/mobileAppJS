/* eslint*/
/* eslint linebreak-style: ["error", "windows"]*/
/* global $ */
const absURL = 'http://users.metropolia.fi/~aliba/mobilecourse/lab4/ex4/';
const jokeURL = 'http://api.icndb.com/jokes/';
let fileToUpload;
$(document).ready(init);

function init() {
    console.log('init');
    loadFileLists();
    $('#loadbutton').click(loadContentFromWeb);
    $('#fileInput').change(loadContentFromLocal);
    $('#loadJokes').click(loadRandomJokes);
    $('#uploadbutton').click(uploadFile);
}

function loadFileLists() {
    console.log('loadfilelists');
    $.ajax({
        url: absURL,
        success: prepareSelect,
    });
}
function prepareSelect(data) {
    let links = $(data).find('a:contains(.json)');
    links.each(function(i) {
        let option = new Option($(links[i]).attr('href'),
         $(links[i]).attr('href'));
        $('#filelist select').append($(option));
    });
}
function loadContentFromLocal(e) {
    console.log('loadlocal');
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(ev) {
        fileToUpload = ev.target.result;
        loadTextArea(fileToUpload, '#previewlocal');
    };
}
function traverseJSON(jsonData) {
    let result = '';
    if (typeof jsonData === 'object') {
        $.each(jsonData, function(k, v) {
            result += k + ' : ';
            result += traverseJSON(v);
        });
    } else {
        result += jsonData + '\n';
    }
    return result;
}
function loadContentFromWeb() {
    console.log('loadContentFromWeb');
    let fileName = $('#filelist select option:selected').text();
    $.getJSON(absURL + fileName, function(data) {
        loadTextArea(JSON.stringify(data), '#previewweb');
        loadTextArea(traverseJSON(data), '#parsedpreviewweb');
    });
}

function decodeEntities(encodedString) {
    let textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
}

function loadTextArea(data, node) {
    console.log('loadTextArea');
    $(node).val(decodeEntities(data));
    $(node).height($(node)[0].scrollHeight);
}
function loadRandomJokes() {
    const jokeURLEnding = 'random/10';
    $.ajax({
        url: jokeURL + jokeURLEnding,
        success: function(data) {
            let result = '';
            $.each(data.value, function(key, val) {
                for (let prop in val) {
                    if (prop == 'joke') {
                        result += (prop + ' : ' + val[prop] + '\n\n');
                    }
                }
            });
            loadTextArea(result, '#previewjokes');
        },
    });
}
function uploadFile() {
    console.log('loadFile');
    let PHPURL = 'GrabTheFile.php';
    let file = $('#fileInput')[0].files[0];

    let formData = new FormData();
    formData.append('ufile', file);
    let option = new Option('0' + file.name, '0' + file.name);
    $('#filelist select').append($(option));
    $.ajax({
        url: absURL + PHPURL,
        type: 'POST',
        processData: false,
        contentType: false,
        data: formData,
        success: function(data) {
            console.log('success', data);
        },
    });
}
