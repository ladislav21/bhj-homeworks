let clickerButton = document.getElementById("cookie");
let clickerCounter = document.getElementById("clicker__counter");
let clickerSpeed = document.getElementById("clicker__speed");
let prevClickTime = Date.now();

function changeCookieSize() {
    let speed = 1 / ((Date.now() - prevClickTime) / 1000);
    clickerSpeed.textContent = speed.toFixed(2);
    prevClickTime = Date.now();
    clickerButton.width === 200 ? clickerButton.width = 250 : clickerButton.width = 200;
    clickerCounter.textContent = parseInt(clickerCounter.textContent) + 1;
}

clickerButton.onclick = changeCookieSize;