const puzzel1Button = document.getElementById('js--puzzel1Button');
const puzzel2Button = document.getElementById('js--puzzel2Button');
const puzzel3Button = document.getElementById('js--puzzel3Button');

const formSubmit = document.getElementById("js--form-submit");

const ratedStar1 = document.getElementById("js--ratedStar1");
const ratedStar2 = document.getElementById("js--ratedStar2");
const ratedStar3 = document.getElementById("js--ratedStar3");

let star2;
let star3;
let aantalSecondesSavanneRekensom;
var startTime, endTime;

if(document.URL.includes('dierentuinpad.html')){
    puzzel2Button.style.cursor = 'default';
    puzzel3Button.style.cursor = 'default';
}
if(document.URL.includes('dierentuinpad-2.html')){
    puzzel1Button.style.cursor = 'default';
    puzzel3Button.style.cursor = 'default';

    star2 = localStorage.getItem('star2');
    star3 = localStorage.getItem('star3');
    console.log(star2);
    console.log(star3);
    if(star2 == 0){
        ratedStar2.style.opacity = "0";
    }
    if(star3 == 0){
        ratedStar3.style.opacity = "0";
    }
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

if(document.URL.includes('puzzel-savanne-rekensom.html')){
    formSubmit.addEventListener("click", function(e){
        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesSavanneRekensom = seconds;
        console.log(aantalSecondesSavanneRekensom);
        
        if(seconds <= 60){
        // if(seconds <= 2){
            localStorage.setItem("aantalSecondesSavanneRekensom", aantalSecondesSavanneRekensom);
            console.log(localStorage.getItem('aantalSecondesSavanneRekensom'));
            console.log("3 sterren");
        }
        if(seconds > 60 && seconds <= 120){
        // if(seconds > 2 && seconds <= 7){
            try {
                console.log("2 sterren");
                localStorage.setItem('star2', 0);
                console.log(localStorage.getItem('star2'));
                localStorage.setItem("aantalSecondesSavanneRekensom", aantalSecondesSavanneRekensom);
                console.log(localStorage.getItem('aantalSecondesSavanneRekensom'));
            } catch (error) {
                console.log(error);
            }
        }
        if(seconds > 120){
        // if(seconds > 8){
            try {
                console.log("1 ster"); 
                localStorage.setItem('star3', 0);
                console.log(localStorage.getItem('star3'));
                localStorage.setItem('star2', 0);
                console.log(localStorage.getItem('star2'));
                localStorage.setItem("aantalSecondes", aantalSecondes);
                console.log(localStorage.getItem('aantalSecondes'));
            } catch (error) {
                console.log(error);
            }
        }
        e.preventDefault();

    });
}

function end(){
    window.location.href="dierentuinpad-2.html";  
}
function backButtonSavanneRekensom(){
    window.location.href="dierentuinpad.html";  
}

