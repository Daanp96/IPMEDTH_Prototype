const puzzel1Button = document.getElementById('js--puzzel1Button');
const puzzel2Button = document.getElementById('js--puzzel2Button');
const puzzel3Button = document.getElementById('js--puzzel3Button');

const formSubmit = document.getElementById("js--form-submit");
const formSubmitDragnDrop = document.getElementById("btnPuzzelAap");

const ratedStar1 = document.getElementById("js--ratedStar1");
const ratedStar2 = document.getElementById("js--ratedStar2");
const ratedStar3 = document.getElementById("js--ratedStar3");
const ratedStar4 = document.getElementById("js--ratedStar4");
const ratedStar5 = document.getElementById("js--ratedStar5");
const ratedStar6 = document.getElementById("js--ratedStar6");
const ratedStar7 = document.getElementById("js--ratedStar7");
const ratedStar8 = document.getElementById("js--ratedStar8");
const ratedStar9 = document.getElementById("js--ratedStar9");

const map_music = document.getElementById("js--map_music");
const puzzle_music = document.getElementById("js--puzzle_music");
const good_job = document.getElementById("js--good_job");
const wrong = document.getElementById("js--wrong");

// logging
const key_input = document.getElementById("js--keyInput");
const btn_log = document.getElementById("btnLogData");
const keyPresses = []
const keyObj = {
    data: [],
    puzzel: "" 
}

key_input.addEventListener('keydown', e => {
    keyPresses.push(e.key);
    console.log(keyPresses);
});

formSubmit.addEventListener('click', e => {
    e.preventDefault();

    keyObj.data = keyPresses;
    keyObj.puzzel = formSubmit.getAttribute("data-puzzel");
    const data = JSON.stringify(keyObj);

    fetch('http://localhost:3000/sendData', {
        method: 'POST', 
        body: data,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': true
        }
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

// antwoorden
const reken_correct = 6;
const foutDier_correct = "aap";

let star2;
let star3;
let star5;
let star6;
let star8;
let star9;
let aantalSecondesSavanneRekensom;
let aantalSecondesSavanneFoutdier;
let aantalSecondesSavanneDragnDrop;
var startTime, endTime;

if(document.URL.includes('dierentuinpad.html')){
    puzzel2Button.style.cursor = 'default';
    puzzel3Button.style.cursor = 'default';
    map_music.play();
}
if(document.URL.includes('dierentuinpad-2.html')){
    puzzel1Button.style.cursor = 'default';
    puzzel3Button.style.cursor = 'default';
    map_music.play();

    console.log(localStorage.getItem('aantalSecondesSavanneRekensom'));
    star2 = localStorage.getItem('star2');
    star3 = localStorage.getItem('star3');
    if(star2 == 0){
        console.log(star2);
        ratedStar2.style.opacity = "0";
    }
    if(star3 == 0){
        console.log(star3);
        ratedStar3.style.opacity = "0";
    }
}
if(document.URL.includes('dierentuinpad-3.html')){
    puzzel1Button.style.cursor = 'default';
    puzzel2Button.style.cursor = 'default';
    map_music.play();

    star2 = localStorage.getItem('star2');
    star3 = localStorage.getItem('star3');
    star5 = localStorage.getItem('star5');
    star6 = localStorage.getItem('star6');
    console.log(localStorage.getItem('aantalSecondesSavanneFoutdier'));
    
    if(star2 == 0){
        console.log(star2);
        ratedStar2.style.opacity = "0";
    }
    if(star3 == 0){
        console.log(star3);
        ratedStar3.style.opacity = "0";
    }
    if(star5 == 0){
        console.log(star5);
        ratedStar5.style.opacity = "0";
    }
    if(star6 == 0){
        console.log(star6);
        ratedStar6.style.opacity = "0";
    }
}
if(document.URL.includes('dierentuinpad-4.html')){
    puzzel1Button.style.cursor = 'default';
    puzzel2Button.style.cursor = 'default';
    puzzel3Button.style.cursor = 'default';

    star2 = localStorage.getItem('star2');
    star3 = localStorage.getItem('star3');
    star5 = localStorage.getItem('star5');
    star6 = localStorage.getItem('star6');
    star8 = localStorage.getItem('star8');
    star9 = localStorage.getItem('star9');
    console.log(localStorage.getItem('aantalSecondesSavanneDragnDrop'));
    
    if(star2 == 0){
        console.log(star2);
        ratedStar2.style.opacity = "0";
    }
    if(star3 == 0){
        console.log(star3);
        ratedStar3.style.opacity = "0";
    }
    if(star5 == 0){
        console.log(star5);
        ratedStar5.style.opacity = "0";
    }
    if(star6 == 0){
        console.log(star6);
        ratedStar6.style.opacity = "0";
    }
    if(star8 == 0){
        console.log(star8);
        ratedStar8.style.opacity = "0";
    }
    if(star9 == 0){
        console.log(star9);
        ratedStar9.style.opacity = "0";
    }
}

function start(){
    startTime = new Date();
}

if(document.URL.includes('puzzel-savanne-rekensom.html')){

    puzzle_music.play();

    formSubmit.addEventListener("click", function(e){

        let form_answer = document.forms["answerForm"]["numberInput"].value;

        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesSavanneRekensom = seconds;
        // console.log(aantalSecondesSavanneRekensom);

        if(form_answer == reken_correct){
            good_job.play();
            
            if(seconds <= 2){
                localStorage.setItem("aantalSecondesSavanneRekensom", aantalSecondesSavanneRekensom);
                // console.log(localStorage.getItem('aantalSecondesSavanneRekensom'));
                // console.log("3 sterren");
            }
            // if(seconds > 60 && seconds <= 120){
            if(seconds > 2 && seconds <= 7){
                try {
                    // console.log("2 sterren");
                    localStorage.setItem('star2', 0);
                    // console.log(localStorage.getItem('star2'));
                    localStorage.setItem("aantalSecondesSavanneRekensom", aantalSecondesSavanneRekensom);
                    // console.log(localStorage.getItem('aantalSecondesSavanneRekensom'));
                } catch (error) {
                    console.log(error);
                }
            }
            // if(seconds > 120){
            if(seconds > 8){
                try {
                    // console.log("1 ster"); 
                    localStorage.setItem('star3', 0);
                    // console.log(localStorage.getItem('star3'));
                    localStorage.setItem('star2', 0);
                    // console.log(localStorage.getItem('star2'));
                    localStorage.setItem("aantalSecondesSavanneRekensom", aantalSecondesSavanneRekensom);
                    // console.log(localStorage.getItem('aantalSecondesSavanneRekensom'));
                } catch (error) {
                    console.log(error);
                }
            }
            
            good_job.onended = () => {
                endSavanneRekensom();
            }
        } else {
            alert("dat klopt niet...");

        }
        
        // if(seconds <= 60){
        e.preventDefault();

    });
}

if(document.URL.includes('puzzel-savanne-foutDier.html')){
    puzzle_music.play();

    formSubmit.addEventListener("click", function(e){
        let text_answer = document.forms["answerForm"]["textInput"].value;

        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesSavanneFoutdier = seconds;
        console.log(aantalSecondesSavanneFoutdier);

        if (text_answer.toLowerCase() === foutDier_correct) {
            good_job.play();

            if(seconds <= 2){
                localStorage.setItem("aantalSecondesSavanneFoutdier", aantalSecondesSavanneFoutdier);
                console.log(localStorage.getItem('aantalSecondesSavanneFoutdier'));
                console.log("3 sterren");
            }
            // if(seconds > 60 && seconds <= 120){
            if(seconds > 2 && seconds <= 7){
                try {
                    console.log("2 sterren");
                    localStorage.setItem('star5', 0);
                    console.log(localStorage.getItem('star5'));
                    localStorage.setItem("aantalSecondesSavanneFoutdier", aantalSecondesSavanneFoutdier);
                    console.log(localStorage.getItem('aantalSecondesSavanneFoutdier'));
                } catch (error) {
                    console.log(error);
                }
            }
            // if(seconds > 120){
            if(seconds > 8){
                try {
                    console.log("1 ster"); 
                    localStorage.setItem('star6', 0);
                    console.log(localStorage.getItem('star6'));
                    localStorage.setItem('star5', 0);
                    console.log(localStorage.getItem('star5'));
                    localStorage.setItem("aantalSecondesSavanneFoutdier", aantalSecondesSavanneFoutdier);
                    console.log(localStorage.getItem('aantalSecondesSavanneFoutdier'));
                    
                } catch (error) {
                    console.log(error);
                }
            }

            good_job.onended = () => {
                endSavanneFoutdier();
            }
            
        } else {
            alert("dat klopt niet...")
        }

        e.preventDefault();

    });
}

if(document.URL.includes('puzzel-DragnDrop.html')){
    formSubmitDragnDrop.addEventListener("click", function(e){
        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesSavanneDragnDrop = seconds;
        console.log(aantalSecondesSavanneDragnDrop);
        
        // if(seconds <= 60){
        if(seconds <= 2){
            localStorage.setItem("aantalSecondesSavanneDragnDrop", aantalSecondesSavanneDragnDrop);
            console.log(localStorage.getItem('aantalSecondesSavanneDragnDrop'));
            console.log("3 sterren");
        }
        // if(seconds > 60 && seconds <= 120){
        if(seconds > 2 && seconds <= 7){
            try {
                console.log("2 sterren");
                localStorage.setItem('star8', 0);
                console.log(localStorage.getItem('star8'));
                localStorage.setItem("aantalSecondesSavanneDragnDrop", aantalSecondesSavanneDragnDrop);
                console.log(localStorage.getItem('aantalSecondesSavanneDragnDrop'));
            } catch (error) {
                console.log(error);
            }
        }
        // if(seconds > 120){
        if(seconds > 8){
            try {
                console.log("1 ster"); 
                localStorage.setItem('star9', 0);
                console.log(localStorage.getItem('star9'));
                localStorage.setItem('star8', 0);
                console.log(localStorage.getItem('star8'));
                localStorage.setItem("aantalSecondesSavanneDragnDrop", aantalSecondesSavanneDragnDrop);
                console.log(localStorage.getItem('aantalSecondesSavanneDragnDrop'));
                
            } catch (error) {
                console.log(error);
            }
        }
        e.preventDefault();

    });
}

function endSavanneRekensom(){
    window.location.href="dierentuinpad-2.html";  
}
function endSavanneFoutdier(){
    window.location.href="dierentuinpad-3.html";  
}
// function backButtonSavanneRekensom(){
//     window.location.href="dierentuinpad.html";  
// }
// function backButtonToSavanneRekensom(){
//     window.location.href="puzzel-savanne-rekensom.html";  
// }

