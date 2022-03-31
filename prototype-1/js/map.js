const puzzel1Button = document.getElementById('js--puzzel1Button');
const puzzel2Button = document.getElementById('js--puzzel2Button');
const puzzel3Button = document.getElementById('js--puzzel3Button');

var startTime, endTime;

if(document.URL.includes('dierentuinpad.html')){
    puzzel2Button.style.cursor = 'default';
    puzzel3Button.style.cursor = 'default';
}
if(document.URL.includes('dierentuinpad-2.html')){
    puzzel1Button.style.cursor = 'default';
    puzzel3Button.style.cursor = 'default';
}
if(document.URL.includes('dierentuinpad-3.html')){
    puzzel1Button.style.cursor = 'default';
    puzzel2Button.style.cursor = 'default';
}
if(document.URL.includes('dierentuinpad-4.html')){
    puzzel1Button.style.cursor = 'default';
    puzzel2Button.style.cursor = 'default';
    puzzel3Button.style.cursor = 'default';
}

function start(){
    startTime = new Date();
}

function end(){
    endTime = new Date();
    var timeDiff = endTime - startTime; //ms
    timeDiff /= 1000;
    let seconds = Math.round(timeDiff);

    window.location="dierentuinpad-2.html";
    console.log('seconde: ' + seconds);
}

