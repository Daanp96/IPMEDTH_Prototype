const alertGood = new Audio('/audio/puzzelAlertGood.mp3'); 
const alertWrong = new Audio('/audio/puzzelAlertWrong.mp3');

const backdropMonkeyLB = document.getElementById("div1").style.opacity = "0.5"; 
const backdropMOnkeyLO = document.getElementById("div2").style.opacity = "0.5";
const backdropMOnkeyRB = document.getElementById("div3").style.opacity = "0.5"; 
const backdropMOnkeyRO = document.getElementById("div4").style.opacity = "0.5"; 

function good(){
    alertGood.play();
}
function wrong(){
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
    // alert("ok");
    good();
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
    // alert("wrong");
    wrong();
  }
}