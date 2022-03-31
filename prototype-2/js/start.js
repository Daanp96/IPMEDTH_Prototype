const overlay = document.getElementById("js--overlay");
const gate = document.getElementById("js--gate");
const arrow = document.getElementById("js--arrow");
const lock = document.getElementById("js--lock");
const map = document.getElementById("js--map");

// Audio
const gate_shut = document.getElementById("js--gate_shut");
gate_shut.volume = 0.15;
const oh_nee = document.getElementById("js--oh_nee");
const slot_uitleg = document.getElementById("js--slot_uitleg");
 
let count = 0;

const doOverlay = () => {
    gate_shut.play();

    gate_shut.onended = () => {
        gate.src = "prototype-2/images/zoo_gate_back.jpg";
        arrow.style.display = "none";
        lock.style.display = "block";
        oh_nee.volume = 1;
        oh_nee.play();
    }
}

const enhanceLock = () => {
    if(count % 2){
        lock.style.width = "40px";
        lock.style.top = "460px";
        gate.style.filter = "blur(0px)";
        map.style.display = "block";
    } else {
        lock.style.width = "260px";
        lock.style.top = "250px";
        gate.style.filter = "blur(8px)";
        slot_uitleg.play();
    }
    count++;
}

const nextPage = () => {
    window.location = "prototype-2/public/dierentuinpad.html";
}