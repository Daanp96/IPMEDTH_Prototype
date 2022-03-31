const puzzel1Button = document.getElementById('js--puzzel1Button');
const puzzel2Button = document.getElementById('js--puzzel2Button');
const puzzel3Button = document.getElementById('js--puzzel3Button');
const newChapterButton = document.getElementById("js--newChapterButton");

const formSubmit = document.getElementById("js--form-submit");
const formSubmitDragnDrop = document.getElementById("btnPuzzelAap");

let aantalSecondesSavanneRekensom;
let aantalSecondesSavanneFoutdier;
let aantalSecondesSavanneDragnDrop;

const map_music = document.getElementById("js--map_music");
const puzzle_music = document.getElementById("js--puzzle_music");
const good_job = document.getElementById("js--good_job");
const wrong = document.getElementById("js--wrong");

// antwoorden
const reken_correct = 5;
const foutDier_correct = "leeuw";

// logging
const key_input = document.getElementById("js--keyInput");
const number_input = document.getElementById("js--number_input");

const keyPresses = []
const keyObj = {
    data: [],
    puzzel: ""
}

var startTime, endTime;

if(document.URL.includes('dierentuinpad.html')){
    if(localStorage.getItem('aantalSecondesSavanneRekensom') != null){
        console.log(localStorage.getItem('aantalSecondesSavanneRekensom'));
    }
    if(localStorage.getItem('aantalSecondesSavanneFoutdier') != null){
        console.log(localStorage.getItem('aantalSecondesSavanneFoutdier'));
    }
    if(localStorage.getItem('aantalSecondesSavanneDragnDrop') != null){
        console.log(localStorage.getItem('aantalSecondesSavanneDragnDrop'));
    }
    if(localStorage.getItem('aantalSecondesSavanneRekensom') != null && localStorage.getItem('aantalSecondesSavanneFoutdier') != null && localStorage.getItem('aantalSecondesSavanneDragnDrop') != null){
        newChapterButton.style.opacity = 1;
    }
}

function start(){
    startTime = new Date();
}

if(document.URL.includes('puzzel-savanne-rekensom.html')){
    number_input.addEventListener('keydown', e => {
        keyPresses.push(e.key);
        console.log(keyPresses);
    });

    formSubmit.addEventListener("click", function(e){
        
        let form_answer = document.forms["answerForm"]["numberInput"].value;

        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesSavanneRekensom = seconds;
        console.log(aantalSecondesSavanneRekensom);

        if(form_answer == reken_correct){
            good_job.play();
            
            if(seconds <= 7){
                localStorage.setItem("aantalSecondesSavanneRekensom", aantalSecondesSavanneRekensom);
                console.log(localStorage.getItem('aantalSecondesSavanneRekensom'));
            }
            // if(seconds > 60 && seconds <= 120){
            if(seconds > 7 && seconds <= 15){
                try {
                    localStorage.setItem("aantalSecondesSavanneRekensom", aantalSecondesSavanneRekensom);
                    console.log(localStorage.getItem('aantalSecondesSavanneRekensom'));
    
                } catch (error) {
                    console.log(error);
                }
            }
            // if(seconds > 120){
            if(seconds > 15){
                try {
                    localStorage.setItem("aantalSecondesSavanneRekensom", aantalSecondesSavanneRekensom);
                    console.log(localStorage.getItem('aantalSecondesSavanneRekensom'));
                } catch (error) {
                    console.log(error);
                }
            }
            
            good_job.onended = () => {
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
                    endSavanneRekensom();
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            }
            
        } else {
            wrong.play();
        }
        
        e.preventDefault();

    });
}

if(document.URL.includes('puzzel-savanne-foutDier.html')){
    key_input.addEventListener('keydown', e => {
        keyPresses.push(e.key);
        console.log(keyPresses);
    });

    formSubmit.addEventListener("click", function(e){
        let text_answer = document.forms["answerForm"]["textInput"].value;
        
        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesSavanneFoutdier = seconds;
        console.log(aantalSecondesSavanneFoutdier);

        if(text_answer.toLowerCase() == foutDier_correct){
            good_job.play();
            
            // if(seconds <= 60){
            if(seconds <= 5){
                localStorage.setItem("aantalSecondesSavanneFoutdier", aantalSecondesSavanneFoutdier);
                console.log(localStorage.getItem('aantalSecondesSavanneFoutdier'));

            }
            // if(seconds > 60 && seconds <= 120){
            if(seconds > 5 && seconds <= 10){
                try {
                    localStorage.setItem("aantalSecondesSavanneFoutdier", aantalSecondesSavanneFoutdier);
                    console.log(localStorage.getItem('aantalSecondesSavanneFoutdier'));

                } catch (error) {
                    console.log(error);
                }
            }
            // if(seconds > 120){
            if(seconds > 10){
                try {
                    localStorage.setItem("aantalSecondesSavanneFoutdier", aantalSecondesSavanneFoutdier);
                    console.log(localStorage.getItem('aantalSecondesSavanneFoutdier'));
                    
                } catch (error) {
                    console.log(error);
                }
            }

            good_job.onended = () => {

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
                    endSavanneFoutdier();
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

            }

        } else {
            wrong.play();
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
        if(seconds <= 10){
            localStorage.setItem("aantalSecondesSavanneDragnDrop", aantalSecondesSavanneDragnDrop);
            console.log(localStorage.getItem('aantalSecondesSavanneDragnDrop'));
        }
        // if(seconds > 60 && seconds <= 120){
        if(seconds > 10 && seconds <= 20){
            try {
                localStorage.setItem("aantalSecondesSavanneDragnDrop", aantalSecondesSavanneDragnDrop);
                console.log(localStorage.getItem('aantalSecondesSavanneDragnDrop'));
            } catch (error) {
                console.log(error);
            }
        }
        // if(seconds > 120){
        if(seconds > 20){
            try {
                localStorage.setItem("aantalSecondesSavanneDragnDrop", aantalSecondesSavanneDragnDrop);
                console.log(localStorage.getItem('aantalSecondesSavanneDragnDrop'));
                
            } catch (error) {
                console.log(error);
            }
        }
        e.preventDefault();

    });
}

// function backButtonToSavanneRekensom(){
//     window.location.href="puzzel-savanne-rekensom.html";  
// }
function endSavanneRekensom(){
    window.location.href="dierentuinpad.html";  
}
function endSavanneFoutdier(){
    window.location.href="dierentuinpad.html";  
}
function endSavanneDragnDrop(){
    window.location.href="dierentuinpad.html"; 
}

function reset(){
    localStorage.clear();
    window.location.href="../../index2.html"; 
};

