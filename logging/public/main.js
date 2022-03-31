const keyBoard = document.getElementById("keyInput");
const btnLogData = document.getElementById("btnLogData");
const buttonLog = document.getElementById("buttonLog");
const keyPresses = [];
let keyJson = {
    data: [],
    puzzel: ""
}

keyBoard.addEventListener('keydown', e => {
    keyPresses.push(e.key);
    console.log(keyPresses);
});

btnLogData.addEventListener('click', e => {
    e.preventDefault();

    keyJson.data = keyPresses;
    keyJson.puzzel = btnLogData.getAttribute("data-puzzel");
    const data = JSON.stringify(keyJson);

    fetch('http://localhost:3000/sendData', {
        method: 'POST', 
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});