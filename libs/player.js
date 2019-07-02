var p5functions = ['preload', 'setup', 'draw', 'keyPressed', 'keyReleased', 'keyTyped', 'mouseMoved', 'mouseDragged', 'mousePressed', 'mouseReleased', 'mouseClicked', 'touchStarted', 'touchMoved', 'touchEnded'];

var editor;
var activeSketch;

// adapted from p5js.org, originally by Lauren McCarthy
// https://github.com/processing/p5.js-website/blob/master/js/render.js
function playCode(code) {
    /*eslint no-with: "off", no-eval: "off"*/
    var runnable = code;
    var _p5 = p5;

    function s(p) {

        if (runnable.indexOf('setup()') === -1 && runnable.indexOf('draw()') === -1) {
            p.setup = function () {
                p.createCanvas(window.innerWidth, window.innerHeight);
                with (p) {
                    eval(runnable);
                }
            };
        }
        else {
            with (p) {
                eval(runnable);
            }

            var fxns = p5functions;
            fxns.forEach(function (f) {

                if (runnable.indexOf('function ' + f + '()') !== -1) {
                    with (p) {
                        p[f] = eval(f);
                    }
                }
            });

            if (typeof p.setup === 'undefined') {
                console.log('no setup');
                p.setup = function () {
                    p.createCanvas(window.innerWidth, window.innerHeight);
                };
            }
        }

    }


    //avoid duplicate canvases
    $('#myP5').empty();

    var myp5 = new _p5(s, myP5);

    activeSketch.remove();

    activeSketch = myp5;

}

function playEditor(data) {
    if (data) libCode = data;

    playCode(editor.getValue() + `
    ` + libCode);
}


function startMain() {
    editor = ace.edit('editor');
    editor.setTheme('ace/theme/xcode');
    editor.getSession().setMode('ace/mode/javascript');
    editor.getSession().setUseWrapMode(true);
    editor.renderer.setShowPrintMargin(false);
    editor.$blockScrolling = Infinity
    //editor.setHighlightActiveLine(false);
    //editor.renderer.setShowGutter(false);
    //editor.gotoLine(0);
    // editor.setAutoScrollEditorIntoView(true);
    // editor.setOption('maxLines', 150);

    activeSketch = new p5('', myP5);
}

// =============== Jquery ==================
var originalCode;
var libCode = "";

//load a script
$(document).ready(function () {

    getFile();

});//doc ready

function getFile(fileName) {
    fileName = fileName || getUrlValue("fileName");

    createLi(fileName);

    if (fileName == undefined) {
        fileName = "examples/" + defaultFile;
    } else {
        fileName = "examples/" + fileName;
    }

    $.ajax({
        type: "GET",
        url: fileName,
        dataType: "text",
        async: true,
        success: loadLibraries,
        error: loadLibrariesDefault
    });
}

function createLi(fileName) {
    var ul = document.getElementById("listExamples");
    ul.innerHTML = '';

    for (var file of files) {
        var className = (file[1] == fileName ? "class='active'" : "");

        ul.innerHTML += `
        <li role="presentation" ${className}>
            <a role="menuitem" href="index.html?fileName=${file[1]}">
                ${file[0]}
            </a>
        </li>
        `;
    }
}

function getUrlValue(varSearch) {
    var searchString = window.location.search.substring(1);
    var variableArray = searchString.split('&');

    for (var i = 0; i < variableArray.length; i++) {
        var keyValuePair = variableArray[i].split('=');
        console.log(keyValuePair);
        if (keyValuePair[0] == varSearch) {
            return keyValuePair[1];
        }
    }
}

function loadLibrariesDefault() {
    editor.setValue("//file not found");
}

function loadLibraries(data) {
    originalCode = data;
    startMain();
    console.log("example loaded");
    editor.setValue(data, -1);

    $.ajax({
        type: "GET",
        url: libFile,
        dataType: "text",
        async: true,
        success: playEditor
    });
}

function reset() {
    editor.setValue(originalCode, -1);
    playEditor();
}

function run() {
    playEditor();
}