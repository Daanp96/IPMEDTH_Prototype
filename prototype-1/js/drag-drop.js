const introPage = new Audio('../audio/puzzelAapIntro.mp3');
const alertGood = new Audio('../audio/puzzelAlertGood.mp3'); 
const alertWrong = new Audio('../audio/puzzelAlertWrong.mp3');
const puzzleMusic = document.getElementById("js--puzzle_music");
puzzleMusic.volume = 0.2;

const backdropMonkeyLB = document.getElementById("div1");
backdropMonkeyLB.style.opacity = "0.5";

const backdropMOnkeyLO = document.getElementById("div2");
backdropMOnkeyLO.style.opacity = "0.5";

const backdropMOnkeyRB = document.getElementById("div3");
backdropMOnkeyRB.style.opacity = "0.5"; 

const backdropMOnkeyRO = document.getElementById("div4");
backdropMOnkeyRO.style.opacity = "0.5"; 

const btnNext = document.getElementById("btnPuzzelAap");
btnNext.style.opacity = "0";

function intro(){
    introPage.play();
    alert("Oh nee! De aap heeft wat problemen. Kan jij hem helpen?");
    puzzleMusic.play();
}

// window.onload = function(){
//     intro();
// }

function good(){
    alertGood.play();
}
function wrong()
{
    alertWrong.play();
}

function allowDrop(e)
{
    e.preventDefault();
}

function drag(e)
{
    e.dataTransfer.setData("content",e.target.id);
}

function drop(e)
{
    e.preventDefault();
        var image =e.dataTransfer.getData("content");
    if (e.target.id === document.getElementById(image).getAttribute('data-div')){ 

        good();
        // alert("goed zo!");
        e.target.appendChild(document.getElementById(image));
        let changeOpacity = document.getElementById(e.target.id);
        
        changeOpacity.style.opacity = "1";
        
        // react shit
        // this.setState({count : this.state.count + 1})
        // console.log(this.state.count);

        // if(this.state.count === 3){
        // let showButton = document.getElementById("btnPuzzelAap");
        // showButton.style.display = "block";
        // }
    }
    else{
        wrong();
        // alert("nee, die is fout");
     }
    if(backdropMonkeyLB.style.opacity === "1" && backdropMOnkeyLO.style.opacity === "1" && backdropMOnkeyRB.style.opacity === "1" && backdropMOnkeyRO.style.opacity === "1"){
        console.log("werkt")
        btnNext.style.opacity = "1";
    
}

}
function endSavanneDragnDrop(){
    window.location.href="dierentuinpad-4.html";  
}

function showButton(){

}