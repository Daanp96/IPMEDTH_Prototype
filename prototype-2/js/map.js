const puzzel1Button = document.getElementById('js--puzzel1Button');
const puzzel2Button = document.getElementById('js--puzzel2Button');
const puzzel3Button = document.getElementById('js--puzzel3Button');

const formSubmit = document.getElementById("js--form-submit");
const formSubmitDragnDrop = document.getElementById("btnPuzzelAap");

let aantalSecondesSavanneRekensom;
let aantalSecondesSavanneFoutdier;
let aantalSecondesSavanneDragnDrop;
var startTime, endTime;

// if(document.URL.includes('dierentuinpad.html')){
//     puzzel2Button.style.cursor = 'default';
//     puzzel3Button.style.cursor = 'default';
// }
if(document.URL.includes('dierentuinpad.html')){
    // puzzel1Button.style.cursor = 'default';
    // puzzel3Button.style.cursor = 'default';
    console.log(localStorage.getItem('aantalSecondesSavanneRekensom'));
    console.log(localStorage.getItem('aantalSecondesSavanneFoutdier'));
    console.log(localStorage.getItem('aantalSecondesSavanneDragnDrop'));

    // if(aantalSecondesSavanneRekensom !== null){
    //     console.log(localStorage.getItem('aantalSecondesSavanneRekensom'));
    // }
    // if(aantalSecondesSavanneFoutdier == null){
    //     console.log(localStorage.getItem('aantalSecondesSavanneFoutdier'));
    // }
    // if(aantalSecondesSavanneDragnDrop == null){
    //     console.log(localStorage.getItem('aantalSecondesSavanneDragnDrop'));
    // }
}

// if(document.URL.includes('dierentuinpad-3.html')){
//     // puzzel1Button.style.cursor = 'default';
//     // puzzel2Button.style.cursor = 'default';

//     console.log(localStorage.getItem('aantalSecondesSavanneFoutdier'));
// }
// if(document.URL.includes('dierentuinpad-4.html')){
    // console.log(localStorage.getItem('aantalSecondesSavanneDragnDrop'));

//     puzzel1Button.style.cursor = 'default';
//     puzzel2Button.style.cursor = 'default';
//     puzzel3Button.style.cursor = 'default';
// }

function start(){
    startTime = new Date();
}
// toevoegen wanneer prototype begint
// na alle 3 de opdrachten -> rechtsbovenin button
// om de tijd te stoppen --> dit doen wij
function startGeheleTijd(){
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
        
        // if(seconds <= 60){
        if(seconds <= 2){
            localStorage.setItem("aantalSecondesSavanneRekensom", aantalSecondesSavanneRekensom);
            console.log(localStorage.getItem('aantalSecondesSavanneRekensom'));
        }
        // if(seconds > 60 && seconds <= 120){
        if(seconds > 2 && seconds <= 7){
            try {
                localStorage.setItem("aantalSecondesSavanneRekensom", aantalSecondesSavanneRekensom);
                console.log(localStorage.getItem('aantalSecondesSavanneRekensom'));
            } catch (error) {
                console.log(error);
            }
        }
        // if(seconds > 120){
        if(seconds > 8){
            try {
                localStorage.setItem("aantalSecondesSavanneRekensom", aantalSecondesSavanneRekensom);
                console.log(localStorage.getItem('aantalSecondesSavanneRekensom'));
            } catch (error) {
                console.log(error);
            }
        }
        e.preventDefault();

    });
}

if(document.URL.includes('puzzel-savanne-foutDier.html')){
    formSubmit.addEventListener("click", function(e){
        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesSavanneFoutdier = seconds;
        console.log(aantalSecondesSavanneFoutdier);
        
        // if(seconds <= 60){
        if(seconds <= 2){
            localStorage.setItem("aantalSecondesSavanneFoutdier", aantalSecondesSavanneFoutdier);
            console.log(localStorage.getItem('aantalSecondesSavanneFoutdier'));
        }
        // if(seconds > 60 && seconds <= 120){
        if(seconds > 2 && seconds <= 7){
            try {
                localStorage.setItem("aantalSecondesSavanneFoutdier", aantalSecondesSavanneFoutdier);
                console.log(localStorage.getItem('aantalSecondesSavanneFoutdier'));
            } catch (error) {
                console.log(error);
            }
        }
        // if(seconds > 120){
        if(seconds > 8){
            try {
                localStorage.setItem("aantalSecondesSavanneFoutdier", aantalSecondesSavanneFoutdier);
                console.log(localStorage.getItem('aantalSecondesSavanneFoutdier'));
                
            } catch (error) {
                console.log(error);
            }
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
        }
        // if(seconds > 60 && seconds <= 120){
        if(seconds > 2 && seconds <= 7){
            try {
                localStorage.setItem("aantalSecondesSavanneDragnDrop", aantalSecondesSavanneDragnDrop);
                console.log(localStorage.getItem('aantalSecondesSavanneDragnDrop'));
            } catch (error) {
                console.log(error);
            }
        }
        // if(seconds > 120){
        if(seconds > 8){
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

