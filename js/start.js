const overlay = document.getElementById("js--overlay");
const audio = document.getElementById("js--audio");
const gate = document.getElementById("js--gate");
const arrow = document.getElementById("js--arrow");

const doOverlay = () => {
    overlay.style.zIndex = "1";
    overlay.style.opacity = "1";
    audio.play();

    audio.onended = () => {
        overlay.style.opacity = "0";
        gate.src = "/images/zoo_gate_back.jpg";
        arrow.style.display = "none";
    }
}